import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

let prisma: PrismaClient;

export async function GET(request: Request) {
    if (!prisma) prisma = new PrismaClient();
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const query = searchParams.get('query');

    let whereArgs: any = {};

    if (city) {
        whereArgs.city = { contains: city, mode: 'insensitive' };
    }

    if (query) {
        whereArgs.OR = [
            { name: { contains: query, mode: 'insensitive' } },
            { dishes: { some: { name: { contains: query, mode: 'insensitive' } } } }
        ];
    }

    try {
        const restaurants = await prisma.restaurant.findMany({
            where: whereArgs,
            include: {
                dishes: true
            }
        });

        return NextResponse.json(restaurants);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch restaurants' }, { status: 500 });
    }
}

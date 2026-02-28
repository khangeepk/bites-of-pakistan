import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

let prisma: PrismaClient;

export async function POST(request: Request) {
    if (!prisma) prisma = new PrismaClient();
    try {
        const body = await request.json();
        const { customerName, customerPhone, deliveryAddr, paymentMethod, items, total } = body;

        const order = await prisma.order.create({
            data: {
                customerName,
                customerPhone,
                deliveryAddr,
                paymentMethod,
                total,
                status: 'pending',
                items: {
                    create: items.map((item: any) => ({
                        dishId: item.dishId,
                        quantity: item.quantity,
                        price: item.price
                    }))
                }
            },
            include: {
                items: true
            }
        });

        return NextResponse.json(order, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}

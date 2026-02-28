import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // Clearing existing data
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.dish.deleteMany()
    await prisma.restaurant.deleteMany()

    console.log('Seeding Database...')

    const waris = await prisma.restaurant.create({
        data: {
            name: 'Waris Nihari',
            description: 'The legendary Nihari of Anarkali.',
            city: 'Lahore',
            type: 'Dhaba',
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop',
            isFeatured: true,
            dishes: {
                create: [
                    {
                        name: 'Special Beef Nihari',
                        description: 'Slow cooked beef shank with bone marrow in spicy gravy.',
                        price: 950,
                        history: 'Originating in the late 18th century...',
                        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop'
                    },
                    {
                        name: 'Nalli Nihari',
                        description: 'Extra bone marrow added for a rich, buttery taste.',
                        price: 1200,
                        image: 'https://images.unsplash.com/photo-1626804475297-41609ea004eb?q=80&w=2670&auto=format&fit=crop'
                    }
                ]
            }
        }
    })

    const cheezious = await prisma.restaurant.create({
        data: {
            name: 'Cheezious',
            description: 'Pakistan\'s fastest growing fast food chain.',
            city: 'Islamabad',
            type: 'Fast Food',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop',
            isFeatured: true,
            dishes: {
                create: [
                    {
                        name: 'Crown Crust Pizza',
                        description: 'Stuffed crust with chicken chunks, cheese, and special sauce.',
                        price: 1500,
                        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop'
                    },
                    {
                        name: 'Zinger Burger',
                        description: 'Crispy fried chicken thigh in a soft bun.',
                        price: 450,
                        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2599&auto=format&fit=crop'
                    }
                ]
            }
        }
    })

    console.log('Seeding Complete.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

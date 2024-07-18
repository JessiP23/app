// app/scripts/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();

        // Seed categories
        const categories = [
            { name: 'Computer Science' },
            { name: 'Music' },
            { name: 'Fitness' },
            { name: 'Photography' },
            { name: 'Accounting' },
            { name: 'Engineering' },
            { name: 'Filming' },
        ];

        for (const category of categories) {
            await prisma.category.create({
                data: category,
            });
        }

        console.log('Categories seeded successfully');
    } catch (error) {
        console.error('Error seeding categories:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch((error) => {
    console.error('Main function error:', error);
    process.exit(1);
});

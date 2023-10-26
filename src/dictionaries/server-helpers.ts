import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const connectToDatabase = async () => {
    try {
        await prisma.$connect()
    } catch (error) {}
}
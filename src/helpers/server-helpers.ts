import prisma from "../../prisma/script"

export const connectToDatabase = async () => {
    try {
        await prisma.$connect()
    } catch (error) {
        console.log(error)
        throw new Error("Unable to connect to database")
    }
}
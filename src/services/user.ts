import { Prisma } from '@prisma/client'
import { prisma } from "../libs/prisma"

type CreateUserprops = {
    name: string,
    email: string
}

export const createUser = async ({name, email}: CreateUserprops) => {
    const user = await prisma.user.create({
        data: {
            name,
            email
        }

    })
    return user
}
import { PrismaClient } from '@prisma/client'

/**
 * @type PrismaClient
 */
let prisma

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
    // The $ in prisma.$connect() is a convention used in Prisma to indicate that the method 
    // is a part of the Prisma client API.
    // When using Prisma, prisma.$connect() is used to explicitly establish a connection to the data source. 
    // PrismaClient automatically connects when you run your first query, but if you need 
    // the first request to respond instantly and cannot wait for a lazy connection,
    // you can explicitly call prisma.$connect()
    prisma.$connect()
} else {
    // In the Remix JS environment, the term "global" refers to environment variables 
    // that are available in the server-side code.
    // Remix does not expose these variables to the client-side bundle,
    // and they are only accessible in the server-side code
    // Here we are checking if we already have an existing connection. If not, we make a new one.
    if (!global.__db) {
        // Here you are creating a new environment var __db and a new connection
        global.__db = new PrismaClient()
        global.__db.$connect()
    }
    prisma = global.__db
}

export { prisma }

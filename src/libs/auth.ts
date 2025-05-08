import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function getUserFromDb(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  })
}


export async function createUser(email: string, password: string, name?: string) {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,  // Vous devriez hacher le mot de passe avant de l'enregistrer dans la base de données
        name,
      },
    })
    console.log('Utilisateur créé:', user)
    return user
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error)
    throw error
  }
}

export async function findUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  } catch (error) {
    console.error('Erreur lors de la recherche de l\'utilisateur:', error)
    throw error
  }
}

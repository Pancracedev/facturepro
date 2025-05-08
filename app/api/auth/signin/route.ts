import { NextRequest, NextResponse } from 'next/server'
import { signIn } from '@/auth'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  // Utilisation de signIn pour authentifier l'utilisateur via NextAuth
  const result = await signIn('credentials', {
    redirect: false, // Empêcher la redirection automatique
    email,
    password,
  })

  // Vérification du résultat de la connexion
  if (result?.error) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  // Si la connexion est réussie, renvoyer une réponse de succès
  return NextResponse.json({ message: 'Connexion réussie' }, { status: 200 })
}

'use client';
import { useSearchParams } from 'next/navigation';

const errorMessages: Record<string, string> = {
  Configuration: "Erreur de configuration du serveur d’authentification.",
  AccessDenied: "Accès refusé. Vous n’avez pas les autorisations nécessaires.",
  CredentialsSignin: "Email ou mot de passe incorrect.",
  OAuthSignin: "Connexion avec le provider échouée.",
  OAuthCallback: "Erreur de retour de provider.",
  OAuthCreateAccount: "Impossible de créer un compte avec ce provider.",
  EmailCreateAccount: "Erreur lors de l’envoi de l’email de connexion.",
  Callback: "Erreur de callback.",
  SessionRequired: "Connexion requise pour accéder à cette ressource.",
  Default: "Une erreur inconnue est survenue. Réessayez plus tard.",
};

export default function ErrorPage() {
  const params = useSearchParams();
  const error = params.get('error') || 'Default';
  return (
    <div className="max-w-md mx-auto text-center mt-10 p-4 border border-red-300 rounded">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur d’authentification</h1>
      <p>{errorMessages[error]}</p>
    </div>
  );
}

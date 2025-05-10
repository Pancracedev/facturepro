// 'use client'
// import { useEffect } from "react"
// import { FileText, Github, Mail } from "lucide-react"
// import Link from "next/link"
// import AuthButton from "@/src/components/button"
// import InputField from "@/src/components/input" 
// import { signIn } from "next-auth/react"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { signInAction } from "@/app/actions/auth"
// import { useSearchParams } from 'next/navigation';

// const errorMessages: Record<string, string> = {
//   Configuration: "Erreur de configuration du serveur d’authentification.",
//   CredentialsSignin: "Email ou mot de passe incorrect.",
//   OAuthSignin: "Connexion avec le provider échouée.",
//   OAuthCallback: "Erreur de retour de provider.",
//   OAuthCreateAccount: "Impossible de créer un compte avec ce provider.",
//   EmailCreateAccount: "Erreur lors de l’envoi de l’email de connexion.",
//   Callback: "Erreur de callback.",
//   Default: "Une erreur inconnue est survenue. Réessayez plus tard.",
// };


// export default  function LoginForm (){

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [rememberMe, setRememberMe] = useState<boolean>(false)
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState("")
//   const [isLoading, setIsLoading] = useState(false);
//   const searchParams = useSearchParams();
//   const errorParam = searchParams.get("error");

 

//   useEffect(() => {
//     if (errorParam) {
//       setError(errorMessages[errorParam] || errorMessages["Default"]);
//     }
//   }, [errorParam]);
//   const handleGithubSignIn = async () => {
//     setIsLoading(true)
//     try {
//       await signIn("github")
//     } catch (err) {
//       setError("Erreur de connexion avec GitHub.")
//     } finally {
//       setIsLoading(false)
//     }
//   }
//   const handleGoogleSignIn = async () => {
//     setIsLoading(true)
//     try {
//       await signIn("google")
//     } catch (err) {
//       console.log(err)
//       setError("Erreur de connexion avec Google.")
//     } finally {
//       setIsLoading(false)
//     }
//   }


//   const handleSubmit = async (event: { preventDefault: () => void }) => {
//     event.preventDefault();
//     setIsLoading(true)
//     // Appel de l'API pour s'authentifier
//     const result = await signIn('credentials', {
//        redirect: false, // Empêcher la redirection automatique
//        email,
//        password,
//      })
//      console.log(result)

//     // if (res.status=== 200) {
//     //   setIsLoading(false)
//     //   // Rediriger vers la page d'accueil après connexion
//     //   router.push('/')
//     // } else {
//     //   // Afficher l'erreur si la connexion échoue
//     //   setError(data.error || 'Une erreur s\'est produite')
//     // }
  
   
//   }
//   return (
//     <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="flex justify-center">
//           <div className="flex items-center text-blue-600 font-bold text-3xl">
//             <FileText className="h-8 w-8 mr-2" />
//             <span>FacturePro</span>
//           </div>
//         </div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connectez-vous à votre compte</h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Ou{" "}
//           <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
//             créez un nouveau compte
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" action={signInAction}>
//             {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}
//             {success && <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">{success}</div>}

//             <InputField
//               id="email"
//               label="Adresse email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="devpancrace@gmail.com"
//               autoComplete="email"
//             />

//             <InputField
//               id="password"
//               label="Mot de passe"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="current-password"
//             />

//             <div className="flex items-center justify-between">
//               <label className="flex items-center text-sm text-gray-900">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <span className="ml-2">Se souvenir de moi</span>
//               </label>

//               <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
//                 Mot de passe oublié?
//               </Link>
//             </div>

//             <AuthButton
//               type="submit"
//               disabled={isLoading}
//               className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
//             >
//               {isLoading ? "Connexion en cours..." : "Se connecter"}
//             </AuthButton>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <AuthButton
//               type="button"
//                 onClick={handleGithubSignIn}
//                 className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50"
//               >
//                 <Github className="h-5 w-5" />
//                 <span className="sr-only">Sign in with GitHub</span>
//               </AuthButton>

//               <AuthButton
//               type="button"
//                 onClick={handleGoogleSignIn}
//                 className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50"
//               >
//                 <Mail className="h-5 w-5" />
//                 <span className="sr-only">Sign in with Google</span>
//               </AuthButton>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'
import { useEffect, useState, Suspense } from "react";
import { FileText, Github, Mail } from "lucide-react";
import Link from "next/link";
import AuthButton from "@/src/components/button";
import InputField from "@/src/components/input"; 
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signInAction } from "@/app/actions/auth";
import { useSearchParams } from 'next/navigation';

const errorMessages: Record<string, string> = {
  Configuration: "Erreur de configuration du serveur d’authentification.",
  CredentialsSignin: "Email ou mot de passe incorrect.",
  OAuthSignin: "Connexion avec le provider échouée.",
  OAuthCallback: "Erreur de retour de provider.",
  OAuthCreateAccount: "Impossible de créer un compte avec ce provider.",
  EmailCreateAccount: "Erreur lors de l’envoi de l’email de connexion.",
  Callback: "Erreur de callback.",
  Default: "Une erreur inconnue est survenue. Réessayez plus tard.",
};

export  function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");

  useEffect(() => {
    if (errorParam) {
      setError(errorMessages[errorParam] || errorMessages["Default"]);
    }
  }, [errorParam]);

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("github");
    } catch (err) {
      setError("Erreur de connexion avec GitHub.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (err) {
      console.log(err);
      setError("Erreur de connexion avec Google.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false, // Empêcher la redirection automatique
      email,
      password,
    });
    console.log(result);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center text-blue-600 font-bold text-3xl">
            <FileText className="h-8 w-8 mr-2" />
            <span>FacturePro</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connectez-vous à votre compte</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{" "}
          <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
            créez un nouveau compte
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}
            {success && <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">{success}</div>}

            <InputField
              id="email"
              label="Adresse email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="devpancrace@gmail.com"
              autoComplete="email"
            />

            <InputField
              id="password"
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-900">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Se souvenir de moi</span>
              </label>

              <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                Mot de passe oublié?
              </Link>
            </div>

            <AuthButton
              type="submit"
              disabled={isLoading}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </AuthButton>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <AuthButton
                type="button"
                onClick={handleGithubSignIn}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Sign in with GitHub</span>
              </AuthButton>

              <AuthButton
                type="button"
                onClick={handleGoogleSignIn}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Sign in with Google</span>
              </AuthButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Suspense wrapping à l'intérieur du composant de page directement
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}



import { signIn } from "next-auth/react"
export async function signInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
  
    const  response = await signIn("credentials", {
        email,
        password,
        redirect:true
        })

    console.log(response)
}

import { signIn } from "next-auth/react"
export async function signInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
  console.log("voici son email")
    const  response = await signIn("credentials", {
        email,
        password,
        redirect:true
        })
    console.log("salut cher  ami de longue date")
    console.log(response)
}
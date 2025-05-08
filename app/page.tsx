import { auth } from "@/auth";
import { redirect } from "next/navigation";


  
const  Home = async () => {
  // const session  = await  auth()
  // console.log(session)
  // const isLoggedIn = !!session;
  // if (!isLoggedIn) {
  //   redirect('/login');
  // }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Salut c'est  moi cher ami de longue date 
    </div>
  );
}
export default Home;
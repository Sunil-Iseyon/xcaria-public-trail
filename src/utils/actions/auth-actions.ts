"use server";

import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData){
  
    const supabase = createClient();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    // console.log(error);

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
    
    return redirect("/home");
  };

  export async function logOut() {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
  
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      redirect('/login')
    }
  
    // revalidatePath('/', 'layout')
    redirect('/')
  }

//   export default signIn;
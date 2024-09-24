// import { datas } from "../datas";
import ViewMorePage from "./showmore";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

interface PageProps {
  params: { showmore: string };
}

export default async function Page({ params }: PageProps) {
  const id = params.showmore;

  const clientApp = ['0' , '1' , '2'];

  const rawData = await fetch('https://xcaria-public.onrender.com/news');
  
  if (!rawData.ok) {
    throw new Error("Failed to fetch the data!!!");
  }

  const data = await rawData.json();
  
  const supabase = createClient()
    const { data: activeSession } = await supabase.auth.getSession();

	if (!activeSession.session) {
		return redirect("/auth");
	}

	const { data: user } = await supabase.from("user").select("*").single();

  if (user?.role === "user") {
    return (
      <h1 className="h-screen flex justify-center items-center">
        Sorry You Don't have access to this page 
      </h1>
    );
  }
  else if(user?.role === "client" && !clientApp.includes(id)){ 
    return (
      <h1 className="h-screen flex justify-center items-center">
        Sorry You Don't have access to this page   
      </h1>  
    );   
  }  

  return (
    <ViewMorePage id={id} news={data} />
    // <pre className="text-white mt-60 ml-80">{JSON.stringify(user,null,2)}</pre>
  );
} 

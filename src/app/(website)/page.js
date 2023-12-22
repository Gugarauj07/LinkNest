import HeroForm from "../../components/forms/HeroForm";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your single nest for all connections
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Consolidate your online presence, social profiles, contact details and more in one place
          </h2>
        </div>
        <HeroForm user={session?.user}/>
      </section>
      
    </main>
  )
}

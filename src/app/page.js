import HeroForm from "./components/HeroForm";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="p-4">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your single nest for all connections
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Consolidate your online presence, social profiles, contact details and more in one place
          </h2>
        </div>
        <HeroForm />
      </section>
      
    </main>
  )
}

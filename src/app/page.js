import HeroForm from "../components/forms/HeroForm";

export default function Home() {
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
        <HeroForm />
      </section>
      
    </main>
  )
}

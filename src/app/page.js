import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="bg-white border-b flex justify-beetween">
        <Link href="/">LinkNest</Link>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div>
          <Link href="/login">Sign in</Link>
          <Link href="/register">Create Account</Link>
        </div>
      </header>

      <section>
      </section>
    </main>
  )
}

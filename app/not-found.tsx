import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-white-200 mb-8">Page not found.</p>
        <Link href="/" className="text-purple hover:underline">
          Go home
        </Link>
      </div>
    </main>
  );
}

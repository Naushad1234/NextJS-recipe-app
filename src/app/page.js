import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Recipe App
      </h1>
      <Link
        href="/recipe-list"
        className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600"
      >
        Explore Recipes
      </Link>
    </div>
  );
}

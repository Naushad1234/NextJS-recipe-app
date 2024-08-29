import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

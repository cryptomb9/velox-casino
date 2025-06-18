import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ClickerRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://mb-monad-clicker.vercel.app";
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#1f1b3a] text-white flex flex-col justify-center items-center px-4">
      <p className="mb-4 text-lg">Redirecting to Clicker Game...</p>
      <button
        onClick={() => router.push("/")}
        className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
      >
        Go Back
      </button>
    </div>
  );
}
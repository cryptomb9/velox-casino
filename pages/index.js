import Link from 'next/link';
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Welcome to Velox Casino 🎰</h1>
      <p className="text-lg mb-6">A Web3-powered gaming hub built on Monad. Win points, climb the leaderboard, and stay ready for future rewards.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <a href="/click" className="bg-white text-black p-6 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Click Game</h2>
          <p>Test your reflexes in this fast-paced clicking challenge.</p>
        </a>
        <a href="/flip" className="bg-white text-black p-6 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Flip Game</h2>
          <p>Flip the coin, take your chances — win or lose instantly!</p>
        </a>
      </div>

      <section className="bg-black bg-opacity-40 p-6 rounded-xl text-white">
        <h3 className="text-2xl font-semibold mb-2">🔥 How It Works</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Play games daily to earn Velox Points (VP).</li>
          <li>Check your wallet and profile from the top-right menu.</li>
          <li>Stay active — inactive wallets lose faucet access.</li>
          <li>Leaderboard updates every 24 hours based on points won.</li>
        </ul>
      </section>
    </Layout>
  );
}
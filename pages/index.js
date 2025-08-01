import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Welcome to Velox 🎰</h1>
      <p className="text-lg mb-6">A Web3-powered gaming hub built on Monad.Flip coin, click fast,and gamble your way to glory</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <a href="/click" className="bg-white text-black p-6 rounded-2xl shadow hover:scale-105 transition">
          <button className="button"><h2 className="text-xl font-bold mb-2">Click Game</h2></button>
          <p>Test your reflexes in this fast-paced clicking challenge.</p>
        </a>
        <a href="/flip" className="bg-white text-black p-6 rounded-2xl shadow hover:scale-105 transition">
          <button className="button"><h2 className="text-xl font-bold mb-2">Flip Game</h2></button>
          <p>Flip the coin, take your chances to win </p>
        </a>
      </div>

      <section className="bg-black bg-opacity-40 p-6 rounded-xl text-white">
        <h3 className="text-2xl font-semibold mb-2">🔥 How It Works</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Play Flip daily to double your MON or MB tokens .</li>
          <li>play click daily to rake in points.</li>
        </ul>
      </section>
    </Layout>
  );
}
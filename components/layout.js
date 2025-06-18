// components/Layout.js
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0038] to-[#3f005b] text-white">
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
//import Navbar from '../components/Navbar';

export default function FlipPage() {
  return (
    <div>
      
      <div style={{ height: '100vh', width: '100%' }}>
        <iframe
          src="https://monadcoinflip.vercel.app"
          title="Monad Flip"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  );
}
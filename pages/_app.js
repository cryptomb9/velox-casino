// pages/_app.js
//import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <main style={{ padding: "2rem" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div style={{ flex: 1 }}>
      <Header title={`WELCOME !`}/>
      {children}
      <Footer />
    </div>
  );
}
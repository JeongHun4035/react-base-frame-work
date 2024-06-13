import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import "./Layout.css";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div id="layout">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import Footer from "@/components/footer";
import Header from "@/components/header";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      {children}

      <Footer />
    </div>
  );
};

export default Main;

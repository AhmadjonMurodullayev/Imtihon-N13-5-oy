import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import AboutCards from "../../components/about-cards/about-cards";
import AbuotProdacts from "../../components/about-cards/abuot-prodacts";

export default function About() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
<AboutCards/>
<AbuotProdacts/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

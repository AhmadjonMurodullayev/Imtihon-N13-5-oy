import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import ShopProdacts from "../../components/shop-prodacts/shop-prodacts";

export default function Shop() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ShopProdacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import Hero from "../../components/hero/hero";
import Cards from "../../components/cards/cards";
import ShopDetails from "../../components/shopdetails/shopdetails";
import Products from "../../components/prodacts/prodacts";
import Costumer from "../../components/costumer/costumer";
import Frued from "../../components/frued/frued";
import Firdlat from "../../components/firidlay/firdlat";
import Discover from "../../components/discover/discover";
import CardFooter from "../../layout/footer/card-footer";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Hero/>
        <Cards/>
        <ShopDetails/>
        <Products/>
        <Costumer/>
        <Frued/>
        <Firdlat/>
        <Discover/>
      </main>
      <footer>
        <CardFooter/>
        <Footer />
      </footer>
    </div>
  );
}

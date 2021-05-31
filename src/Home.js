import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>

      {/* 1st row */}
      <div className="home__row">
        <Product
          id="12332145"
          title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Black)"
          price={9999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61ZJvf5xWBL._SX679_.jpg"
        />
        <Product
          id="45665478"
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
          price={3499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg"
        />
      </div>

      {/* 2nd row */}
      <div className="home__row">
        <Product
          id="78998745"
          title="Amazon Brand - Solimo Collage Photo Frames (Set of 10, Wall Hanging) (Black)"
          price={999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71n%2BKlEjCGL._SX522_.jpg"
        />
        <Product
          id="14774125"
          title="Amazon Brand - Solimo Wall Sticker for Bedroom (Pinwheel, Ideal Size on Wall: 87 cm x 89 cm)"
          price={239}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71bpw01olfL._SX522_.jpg"
        />
        <Product
          id="85225896"
          title="Amazon Brand - Solimo 12 Wall Clock - Paramount Paneling (Silent Movement, Black Frame)"
          price={699}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/A1b8JSbejjL._SX522_.jpg"
        />
      </div>

      {/* 3rd row */}
      <div className="home__row">
        <Product
          id="96336982"
          title="Acer Predator Helios 300 Gaming Laptop PC, 17.3inch Full HD 144Hz 3ms IPS Display, Intel i7-9750H, GTX 1660 Ti 6GB, 16GB DDR4, 512GB PCIe NVMe SSD, RGB Backlit Keyboard, PH317-53-7777"
          price={238816}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Xz3H42nZL._SX679_.jpg"
        />
      </div>

      {/* 4th row */}
      <div className="home__row">
        <Product
          id="15995142"
          title="Pyjama Profit: The Millennial's Guide to a Sustainable Freelance Career Kindle Edition"
          price={118}
          rating={5}
          image="https://m.media-amazon.com/images/I/41QiPydPZCL.jpg"
        />
        <Product
          id="75335784"
          title="Negotiate like an Avalonian: An arsenal of techniques to negotiate better salaries, deals and funding! Kindle Edition"
          price={119}
          rating={5}
          image="https://m.media-amazon.com/images/I/415jfbtzphL.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

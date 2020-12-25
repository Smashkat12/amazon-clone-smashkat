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
          alt=""
        />
        <div className="home__row">
          <Product
            id="3452345234"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />

          <Product
            id="252352354325"
            title="Kenwood KMixStand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={294.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81tCWi0BusL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="252323354325"
            title="Willful Smart Watch for Men Women 2020 Version IP68 Waterproof, Fitness Tracker Heart Rate Monitor"
            price={200.0}
            image="https://m.media-amazon.com/images/I/51Gn97aDMoL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="25235278325"
            title="All-new Echo (4th Gen) - Charcoal - bundle with Philips Hue Bulbs (2-pack)"
            price={2750.0}
            image="https://m.media-amazon.com/images/I/71hs325YxWL._AC_UY218_.jpg"
            rating={2}
          />
          <Product
            id="252352354455"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={300.0}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2523233454325"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
            price={419.0}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

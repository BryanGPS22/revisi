import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FlashSale from "@/components/FlashSale";
import Banner from "@/components/Banner";
import WhatsAppButton from "@/components/WhatsAppButton";
import trackMixpanel from "@/lib/trackMixpanel";
import initMixpanel from "@/lib/initMixpanel";
import Testi from "@/components/Testi"
import Mitra from "@/components/Mitra"
import Pembayaran from "@/components/Pembayaran";

const Pages = () => {
  useEffect(() => {
    initMixpanel();
    let trackData = {
      Page: "Landing Page",
    };
    trackMixpanel("Viewed Page", trackData);
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen overflow-x-hidden">
        <div
          id="navbar"
          className="container bg-transparent mx-auto lg:mx-5 2xl:mx-auto xl:mx-auto"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <Navbar />
        </div>

        <main className="mb-auto">
          <div
            id="banner"
            className="md:container bg-transparent my-1 lg:mx-5 2xl:mx-auto xl:mx-auto z-0"
            style={{ maxWidth: "600px" }}
          >
            <Banner />
          </div>
          <div
            id="banner"
            className=" bg-transparent lg:mx-5 mt-20 md:mt-16 2xl:mx-auto xl:mx-auto mx-3 z-0"
            style={{ maxWidth: "600px" }}
          >
            <FlashSale />
          </div>

          <div
            id="banner"
            className=" bg-transparent lg:mx-5 mt-4 md:mt-4 2xl:mx-auto xl:mx-auto mx-3 z-0"
            style={{ maxWidth: "600px" }}
          >
            <Testi />
          </div>

          <div
            id="banner"
            className="bg-transparent mt-6 mx-5 2xl:mx-auto xl:mx-auto lg:mx-auto z-0"
            style={{ maxWidth: "600px" }}
          >
            <Mitra />
          </div>
          <div
            id="banner"
            className="bg-transparent mt-6 mx-5 2xl:mx-auto xl:mx-auto lg:mx-auto z-0"
            style={{ maxWidth: "600px" }}
          >
            <Pembayaran />
          </div>

          <WhatsAppButton />
        </main>
      </div>
    </>
  );
};

export default Pages;
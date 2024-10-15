import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { RiWaterFlashFill } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";

function Pricing() {
  const [showMore1, setShowMore1] = useState(false);

  const toggleShowMore1 = () => {
    setShowMore1(!showMore1);
  };

  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-center">
        <div className="py-3 max-w-[600px] mx-auto border-t pt-3 mt-10">
          <div className="p-3">
            <h2 className="text-bold text-sm t-title">Contact Us</h2>
            <div className="grid grid-cols-1 gap-2 mt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=6285601006218&text=Halo+saya+tertarik+dengan+produk+Anda&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-white text-sm rounded-md border flex items-center gap-1"
              >
                <Image
                  width={40}
                  height={40}
                  src="https://assets.jajangame.com/2022/11/16e7dcd394dd7377d913c296a3505929.png?auto_optimize=medium"
                  className="h-6 w-auto rounded-md"
                  alt=""
                />
                <span>Butuh Bantuan? Klik Disini!</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-2">
              <a
                href="https://www.instagram.com/hamdulkar_/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-white text-sm rounded-md border flex items-center gap-1"
              >
                <Image
                  width={20}
                  height={30}
                  src="/images/Instagram_icon.png.webp"
                  className="h-4 w-auto rounded-md mr-[3px] ml-1"
                  alt=""
                />
                <span>Butuh Bantuan? Klik Disini!</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100079731814357"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-white text-sm rounded-md border flex items-center gap-1"
              >
                <Image
                  width={20}
                  height={30}
                  src="/images/15707884.png"
                  className="h-4 w-auto rounded-md mr-[3px] ml-1"
                  alt=""
                />
                <span>Butuh Bantuan? Klik Disini!</span>
              </a>
            </div>
          </div>

          <p className="w-full px-3 text-sm mt-6">
            © <span id="years">2024</span>{" "}
            <Link href="/" className="">
              Sapukembangglagah
            </Link>
            . All Rights Reserved
          </p>
          <p className="w-full px-3 text-xs">
            All other trademarks belong to their respective owners
          </p>
          <p className="w-full px-3 text-xs">Versi 1.1.5</p>
          <div className="h-20"></div>
        </div>
      </div>
    </>
  );
}

export default Pricing;

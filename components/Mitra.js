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
        <div
          className="container mx-auto max-w-6xl p-4 bg-[#4187B6] border"
          style={{ borderRadius: "10px 10px 0 0" }}
        >
          <p className=" text-center font-semibold text-white text-lg">
            Sapu Kembang Gelagah Termurah dan Terpercaya!
          </p>
        </div>
        <div
          className="container mx-auto max-w-6xl p-4 bg-white shadow-lg"
          style={{ borderRadius: "0 0 10px 10px" }}
        >
          <div className="flex items-start flex-col text-left font-mediumtext-lg mb-6">
            <p className="text-[#4BA7E3] text-xl font-semibold flex items-center mt-3">
              <BsPatchCheckFill size={40} className="mb-[-20px] mr-5" />
            </p>
            <p className="text-lg font-medium flex items-center ml-[60px] text-gray-800 mt-[-38px]">
              Mitra Resmi
            </p>
            <p className="text-gray-600 font-normal text-sm ml-[60px] mb-1">
              Bekerja langsung dengan produsen terkemuka dunia, kami menawarkan
              Sapu Kembang Gelagah Murah dan Cepat
            </p>
          </div>
          <div className="flex items-start flex-col text-left font-medium text-lg mb-6">
            <p className="text-[#4BA7E3] text-xl font-semibold flex items-center mt-3">
              <FaRegCreditCard size={40} className="mb-[-20px] mr-5" />
            </p>
            <p className="text-lg font-medium flex items-center ml-[60px]  mt-[-38px]">
              Transaksi Mudah & Terpercaya
            </p>
            <p className="text-gray-600 font-normal text-sm ml-[60px] mb-1">
              Kami menyediakan pembayaran yang mudah dan aman dengan puluhan
              metode pembayaran.
            </p>
          </div>
          <div className="flex items-start flex-col text-left font-mediumtext-lg mb-6">
            <p className="text-[#4BA7E3] text-xl font-semibold flex items-center mt-3">
              <RiWaterFlashFill size={40} className="mb-[-20px] mr-5" />
            </p>
            <p className="text-lg font-medium flex items-center ml-[60px] text-gray-800 mt-[-38px]">
              Pengiriman Instan
            </p>
            <p className="text-gray-600 font-normal text-sm ml-[60px] mb-1">
              Item akan dikirimkan secara instan ke Alamat Anda dimanapun dan
              kapanpun.
            </p>
          </div>
          <div className="flex items-start flex-col text-left font-medium text-lg mb-6">
            <p className="text-[#4BA7E3] text-xl font-semibold flex items-center mt-3">
              <IoMdHelpBuoy size={40} className="mb-[-20px] mr-5" />
            </p>
            <p className="text-lg font-medium flex items-center ml-[60px]  mt-[-25px]">
              Bantuan Pelanggan
            </p>
            <p className="text-gray-600 font-normal text-sm ml-[60px] mb-1">
              Kami menyediakan bantuan pelanggan yang ramah dan responsif.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileInvoice } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

function Pricing() {
  return (
    <>
        <div className="container mx-auto max-w-[600px] p-2 bg-white">
          <div className="grid grid-cols-4 md:grid-cols-4 gap-20 rounded-lg">
            <div className="col-span-1 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1">
              <Link href={"/"}>
                <div className="flex flex-col items-center justify-center text-gray-400 hover:cursor-pointer hover:text-blue-600">
                  <RiHome2Fill size={24} className="" />
                  <p className="font-medium text-xxs">Home</p>
                </div>
              </Link>
            </div>

            <div className="col-span-1 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1">
              <Link href={"/transaksi"}>
                <div className="flex flex-col items-center justify-center text-gray-400 hover:cursor-pointer hover:text-blue-600">
                  <FaFileInvoice size={24} className="" />
                  <p className="font-medium text-xxs">Riwayat</p>
                </div>
              </Link>
            </div>
            <div className="col-span-1 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1">
              <div className="flex flex-col items-center justify-center text-gray-400 hover:cursor-pointer hover:text-blue-600">
                <FaWallet size={24} className="" />
                <p className="font-medium text-xxs">Deposit</p>
              </div>
            </div>
            <div className="col-span-1 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1">
              <div className="flex flex-col items-center justify-center text-gray-400 hover:cursor-pointer hover:text-blue-600">
                <IoPerson size={24} className="" />
                <p className="font-medium text-xxs">Profil</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Pricing;

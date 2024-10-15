import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import Link from "next/link";
import trackMixpanel from "@/lib/trackMixpanel";
import Image from "next/image";

const WhatsAppButton = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
    let trackData = {
      Label: "FAB Whatsapp",
    };
    trackMixpanel("Clicked Button", trackData);
  };

  return (
    <div className="whatsapp-button">
      <div className={`whatsapp-chat ${showChat ? "active" : ""}`}>
        <div className="close-button" onClick={toggleChat}>
          <FaTimes
            size={17}
            className="text-[#E8E1D9] font-normal hover:font-semibold"
          />
        </div>
        <Image
          src="/images/gambar.jpeg" // Ganti dengan path gambar yang sesuai
          width={300}
          height={400}
          alt="WhatsApp"
        />
        <div className="py-4 px-8 bg-white shadow-xl rounded-md mb-7">
          <Link
            href="https://api.whatsapp.com/send/?phone=6285601006218&text=Halo+saya+tertarik+dengan+produk+Anda&type=phone_number&app_absent=0"
            target="_blank"
            className="text-center text-sm font-normal text-white rounded-[40px] bg-[#3CBA28] px-2 py-2 flex items-center justify-center" // Menggunakan flexbox untuk centering
          >
            <FaWhatsapp size={20} className="mr-2" />
            Start Chat
          </Link>
        </div>
      </div>
      <button onClick={toggleChat} className="chat-toggle-button">
        <Image
          src="/images/icon-wa.png" // Ganti dengan path gambar yang sesuai
          width={30}
          height={30}
          alt="WhatsApp"
        />
      </button>
      <style jsx>{`
        .whatsapp-button {
          position: fixed;
          bottom: 25px;
          right: 40px;
        }

        .chat-toggle-button {
          background-color: #fafafa;
          border: none;
          border-radius: 50%;
          padding: 10px;
          cursor: pointer;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        }

        .whatsapp-chat {
          display: none;
          position: fixed;
          bottom: 85px;
          right: 40px;
          z-index: 999;
        }

        .whatsapp-chat.active {
          display: block;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;

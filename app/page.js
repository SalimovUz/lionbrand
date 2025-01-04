"use client";
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import Snowfall from "react-snowfall"; // Yangi yil qori
import Judo from "../public/judo.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-white to-green-100 flex flex-col items-center relative">
      {/* Snowfall effect */}
      <Snowfall color="#fff" snowflakeCount={100} />

      {/* Header Section */}
      <div className="text-center py-8">
        <div className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-green-500 overflow-hidden">
          <Image src={Judo} alt="Logo" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-5xl font-extrabold text-red-800 mt-4">
          Lion Brand
          🦁
        </h1>

        <p className="text-gray-800 mt-2 text-lg tracking-wide">
          🚚O'zbekiston bo'ylab yetkazish xizmati bepul💥
        </p>
      </div>

      {/* Social Media Links */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 border-2 border-red-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Ijtimoiy tarmoqlarimiz!
        </h1>
        <a target="_blank"
          href="https://t.me/lionbrand_qoyliq"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition border"
        >
          <TelegramIcon className="text-blue-600 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram</h1>
            <p className="text-gray-600">@lionbrand_qoyliq</p>
          </div>
        </a>
        <a target="_blank"
          href="https://www.instagram.com/lion_brand_uz2/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-50 transition border"
        >
          <InstagramIcon className="text-pink-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Instagram</h1>
            <p className="text-gray-600">@lion_brand_uz2</p>
          </div>
        </a>
        <a target="_blank"
          href="https://t.me/mom1noow"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition border"
        >
          <SendIcon className="text-blue-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram Admin</h1>
            <p className="text-gray-600">@mom1noow</p>
          </div>
        </a>
        {/* Phone Number */}
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition border">
          <PhoneIcon className="text-green-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Bog'lanish</h1>
            <p className="text-gray-600">+998 94 622 12 34</p>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 mt-10 mb-8 border-2 border-red-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Manzil (Filiallarimiz)
        </h1>
        <a target="_blank"
          href="https://maps.app.goo.gl/ePo44NEkxscgCmci8?g_st=ic"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Qo'yliq</h1>
            <p className="text-gray-600">☎️Tel: +998 94 622 12 34</p>
          </div>
        </a>
        <a target="_blank"
          href="https://maps.app.goo.gl/rifaUgUtQwyC118v7?g_st=ic"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Yashnobod</h1>
            <p className="text-gray-600">☎️Tel: +998 97 777 91 91</p>
          </div>
        </a>
        <a target="_blank"
          href="https://maps.app.goo.gl/azAbaXWKA1eVu4Hf7?g_st=ic"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Chilonzor Metro</h1>
            <p className="text-gray-600">☎️Tel: +998 77 073 94 44</p>
          </div>
        </a>
      </div>
    </div>
  );
}

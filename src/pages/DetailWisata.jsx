import React from "react";
// Icons
import Avatar from "../assets/avatar86.png";
import PhoneIcon from "../assets/phone.svg";
import MoneyIcon from "../assets/money.svg";
import FacebookIcon from "../assets/Facebook.svg";
import WhatsappIcon from "../assets/WhatsApp.svg";
import TelegramIcon from "../assets/Telegram.svg";
import PinterestIcon from "../assets/Pinterest.svg";
import TwitterIcon from "../assets/Twitter.svg";
import TestGeo from "../components/wisata/TestGeo";

const DetailWisata = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[60vw] mt-10 flex flex-col gap-12">
        <p className="text-3xl font-semibold text-center">Wisata Air Terjun</p>
        <div className="h-1 w-24 bg-orange-400 m-auto" />
        <img
          src="https://images.unsplash.com/photo-1591285359917-a97cd96cd29c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMHRlcmp1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="rounded-lg w-full h-[500px]"
        />

        <div className="flex flex-col gap-8">
          <div className="flex gap-5">
            <img
              src={Avatar}
              alt=""
              className="rounded-full w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <p className="font-semibold text-xl">Counter Es WDD</p>
                <p className="text-orange-500 bg-orange-100 text-base font-semibold px-3 py-1 rounded-full">
                  Konvensi
                </p>
              </div>
              <p className="text-gray-700 text-sm">
                Diposting pada 18 Januari 2023
              </p>
            </div>
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit magni esse sit dignissimos at aut eum voluptatum!
            Voluptatem quisquam, ipsa harum culpa inventore cumque, sequi,
            commodi ad nam labore quibusdam?
          </p>
          <div className="flex gap-10 w-full">
            <div className="flex gap-5 items-center bg-white rounded-lg w-[50%] h-[10vh] px-8">
              <img
                src={MoneyIcon}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex-col">
                <p>Harga</p>
                <p className="font-semibold">Rp. 20.000</p>
              </div>
            </div>
            <div className="flex gap-5 items-center bg-white rounded-lg w-[50%] h-[10vh] px-8">
              <img
                src={PhoneIcon}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex-col ">
                <p>No. Telpon</p>
                <p className="font-semibold">089862719321</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-left font-semibold">Share Wisata Ini</p>
          <div className="flex gap-3">
            <img
              src={FacebookIcon}
              alt="facebook"
              className="w-[40px] h-[40px]"
            />
            <img
              src={WhatsappIcon}
              alt="whatsapp"
              className="w-[40px] h-[40px]"
            />
            <img
              src={TelegramIcon}
              alt="telegram"
              className="w-[40px] h-[40px]"
            />
            <img
              src={PinterestIcon}
              alt="pinterest"
              className="w-[40px] h-[40px]"
            />
            <img
              src={TwitterIcon}
              alt="twitter"
              className="w-[40px] h-[40px]"
            />
          </div>
        </div>
        <div className="w-full h-[400px] bg-white rounded-lg">
          <TestGeo />
        </div>
      </div>
    </div>
  );
};

export default DetailWisata;

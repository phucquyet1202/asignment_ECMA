import {
  useEffect,
  useState,
  rating,
  priceFormat,
  discount,
} from "../../../../lib";

import Header from "../header_client/header";
import nav_bar from "../nav_bar_client/nav_bar";
import "@fortawesome/fontawesome-free/css/all.css";
import content from "./content";
import Footer from "../footer_client/footer";

const homePage = function () {
  const [data, setData] = useState([]);

  useEffect(function () {
    fetch("http://localhost:3000/books/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  }, []);

  return /*html*/ `

    ${Header()}

    <div class="w-5/6 flex justify-around pt-3">
        ${nav_bar()}
        <div class="mx-auto px-[-500px] w-[950px]">
            <div>
                <h1 class="text-[23px] leading-[28px] font-normal p-4 text-[#000000]">Nhà Sách Tiki</h1>
                <img src="/src/pages/img/banner.png" alt="" class="w-[800px] h-[285px]">
            </div>

            <div class="border-b-[1px] w-[900px] p-3">
                <div class="flex justify-around w-[500px] font-normal text-[13px] leading-[20px]">
                    <button id="popularProducts" class="hover:text-red-500">Phổ biến</button>
                    <button id="bestSellerProducts" class="hover:text-red-500">Bán chạy</button>
                    <button id="" class="hover:text-red-500">Hàng mới</button>
                    <button id="lowProducts" class="hover:text-red-500">Giá thấp</button>
                    <button id="highProducts" class="hover:text-red-500">Giá cao</button>
                </div>
            </div>

            <div class="flex p-3">
                <div class="bg-[#EEEEEE] rounded-[100px] w-[80px] h-[24px]">
                    <img src="/src/pages/img/tikiNow.png" alt="" class="w-[56px] h-[24px] ml-3.5">
                </div>

                <div class="bg-[#EEEEEE] rounded-[100px] w-[80px] h-[24px] ml-3">
                    <img src="/src/pages/img/freeship2.png" alt="" class="w-[56px] h-[24px] ml-3.5">
                </div>
            </div>

            <div class="grid grid-cols-4 gap-2 pb-[100px]">
               ${content({ data })}
                </div >
            </div >
        </div >
    </div>
    ${Footer()}
`;
};

export default homePage;

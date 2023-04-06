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
  const [newdata, setNewData] = useState([]);



  useEffect(function () {
    fetch("http://localhost:3000/books/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
        setNewData(data);
      });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.cate').forEach((item) => {
      item.addEventListener('click', () => {
        const newPro = data.filter((pro) => {
          return pro.categories?.id == item.dataset.id
        })
        setCate(newPro);
      }, [])
    })
  })
  let newListCate = [];

  useEffect(() => {
    document.querySelector('#popularProducts').addEventListener('click', () => {
      const pro = data.filter((item) => {
        return item.quantity_sold?.value > 100
      })
      setNewData(pro)
    })

    document.querySelector('#bestSellerProducts').addEventListener('click', () => {
      const pro = data.filter((item) => {
        return item.quantity_sold?.value > 1000
      })
      setNewData(pro)

    })
    document.querySelector('#newProduct').addEventListener('click', () => {
      const pro = data.sort((a, b) => b.id - a.id)
      setNewData(pro)

    })
    document.querySelector('#lowProducts').addEventListener('click', () => {
      const pro = data.sort((a, b) => a.current_seller?.price - b.current_seller?.price)
      setNewData(pro)

    })
    document.querySelector('#highProducts').addEventListener('click', () => {
      const pro = data.sort((a, b) => b.current_seller?.price - a.current_seller?.price)
      setNewData(pro)

    })
  })

  return /*html*/ `

    ${Header()}

    <div class="w-5/6 flex justify-around pt-3">
  ${nav_bar()}
        <div class="mx-auto px-[-500px] w-[950px]">
            <div>
                <h1 class="text-[23px] leading-[28px] font-normal p-4 text-[#000000]">Nhà Sách Tiki</h1>
                <img src="/src/pages/img/banner.png" alt="" class="w-full h-[285px]">
            </div>

            <div class="border-b-[1px] w-full p-3">
                <div class="flex justify-around w-[500px] font-normal text-[16px] leading-[20px]">
                    <button id="popularProducts" class="hover:text-red-500">Phổ biến</button>
                    <button id="bestSellerProducts" class="hover:text-red-500">Bán chạy</button>
                    <button id="newProduct" class="hover:text-red-500">Hàng mới</button>
                    <button id="lowProducts" class="hover:text-red-500">Giá thấp</button>
                    <button id="highProducts" class="hover:text-red-500">Giá cao</button>
                </div>
            </div>

            <div class="flex p-3 mt-3">
                <div class="bg-[#EEEEEE] rounded-[100px] w-[80px] h-[24px]">
                    <img src="/src/pages/img/tikiNow.png" alt="" class="w-[56px] h-[24px] ml-3.5">
                </div>

                <div class="bg-[#EEEEEE] rounded-[100px] w-[80px] h-[24px] ml-3">
                    <img src="/src/pages/img/freeship2.png" alt="" class="w-[56px] h-[24px] ml-3.5">
                </div>
            </div>

            <div class="grid grid-cols-3 gap-4 pb-[100px] mt-4" id="menu">
               ${content({ newdata })}
                </div >
            </div >
        </div >
    </div>
    ${Footer()}
`;
};

export default homePage;

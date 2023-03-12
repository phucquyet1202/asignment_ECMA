import {
  discount,
  priceFormat,
  rating,
  useEffect,
  useState,
} from "../../../../lib";

import pro_img from "./pro_img";
import book_information from "./book_information";
import respective_pro from "./respective_pro";
import Header from "../header_client/header";
import Footer from "../footer_client/footer";

const ProductPage = function (id, cate) {
  // const urlParams = new URLSearchParams(location.search);
  // const id = urlParams.get('book_id')
  // const cate = urlParams.get('cate_id')

  const [book, setData] = useState({});
  useEffect(function () {
    fetch(`http://localhost:3000/books/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (book) {
        setData(book);
      });
  }, []);
  //    console.log(id);
  const [book1, setData1] = useState([]);
  useEffect(function () {
    // const urlParams = new URLSearchParams(location.search);
    // const cate = urlParams.get('categories')

    fetch(`http://localhost:3000/books?categories.id=${cate}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (book1) {
        setData1(book1);
      });
  }, []);
  // console.log(book1);
  useEffect(function () {

    const hidden = document.querySelector("#show-more");
    const show = document.querySelector("#show-less");
    const description = document.querySelector("#description");
    hidden.addEventListener("click", (e) => {
      e.preventDefault()
      description.innerHTML = book?.short_description;
      hidden.classList.add("hidden");
      show.classList.remove("hidden");
    });
    show.addEventListener("click", (e) => {
      e.preventDefault()
      description.innerHTML = book?.description;
      show.classList.add("hidden");
      hidden.classList.remove("hidden");
    });
  });

  return /*html*/ `

    ${Header()}

    <div class="w-5/6 mx-auto mb-[100px]">
        <div id="product" class="w-full px-40 h-[auto]">
            <div class="flex">
                <div class=" p-5 mt-[-5px]">
               ${pro_img(book)}
                   
                </div>

                <div class="w-1/3 mx-20">
                    ${book_information(book)}
                    
                </div>
                
            </div>
            <div class="flex mx-[80px]">
            ${book?.images
      ?.slice(0, 4)
      .map(function (image) {
        return `
                <img class="w-[64px] h-[64px] mt-2 mx-3" src="${image.base_url}" alt="">`;
      })
      .join("")}
              
         </div>
            <div class="mx-auto w-full mt-10">
                <h1 class="text-[20px] leading-[32px] px-[90px] font-normal text-[#333333]">Sản phẩm tương tự</h1>
                <div class=" mx-auto">
                    <div class="grid grid-cols-6 gap-2 my-5 mx-[70px]">
                    ${respective_pro(book1, id)}
                    </div>
                </div>
            </div>

            <div class="mx-auto mt-1">
                <h1 class="text-[20px] leading-[32px] px-20 py-5 font-normal text-[#333333]">Thông tin chi tiết</h1>
                <div class="flex w-[auto] mx-auto px-[90px] h-[auto] rounded-[4px] mt-3">
                    <div class="text-[13px] leading-[21px] font-normal text-[#4F4F4F] bg-[#EFEFEF] w-[250px]">
                        <p class="mt-[10px] ml-5">${book?.specifications?.[0]?.attributes[0]?.name ?? ""
    }</p>
                        <p class="mt-[20px] ml-5">${book?.specifications?.[0]?.attributes[1]?.name ?? ""
    }</p>
                        <p class="mt-[20px] ml-5">${book?.specifications?.[0]?.attributes[2]?.name ?? ""
    }</p>
                        <p class="mt-[20px] ml-5">${book?.specifications?.[0]?.attributes[3]?.name ?? ""
    }</p>
                        <p class="mt-[20px] ml-5">${book?.specifications?.[0]?.attributes[4]?.name ?? ""
    }</p>
                        <p class="mt-[20px] ml-5">${book?.specifications?.[0]?.attributes[5]?.name ?? ""
    }</p>
                        <p class="mt-[20px] ml-5">${book?.specifications?.[0]?.attributes[6]?.name ?? ""
    }</p>
                    </div>

                    <div class="text-[13px] leading-[21px] font-normal text-[#242424] ml-3">
                        <p class="mt-[10px]">${book?.specifications?.[0]?.attributes[0]?.value ?? ""
    }</p>
                        <p class="mt-[20px]">${book?.specifications?.[0]?.attributes[1]?.value ?? ""
    }</p>
                        <p class="mt-[20px]">${book?.specifications?.[0]?.attributes[2]?.value ?? ""
    }</p>
                        <p class="mt-[20px]">${book?.specifications?.[0]?.attributes[3]?.value ?? ""
    }</p>
                        <p class="mt-[20px]">${book?.specifications?.[0]?.attributes[4]?.value ?? ""
    }</p>
                        <p class="mt-[20px]">${book?.specifications?.[0]?.attributes[5]?.value ?? ""
    }</p>
                        <p class="mt-[20px]">${book?.specifications?.[0]?.attributes[6]?.value ?? ""
    }</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 w-4/5 px-20">
                <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Mô tả sản phẩm</h1>
                <div class="text-[14px] leading-[21px] font-normal text-[#333333] p-1">
                    <p id="description">${book?.short_description}</p>
                    <div class="border w-[200px] text-center border-[#189EFF] rounded-[10px] mx-auto mt-5">
                        <button id="show-more" class="hover:text-red-500 text-[#189EFF] font-normal text-[13px] leading-[39px]">Xem Thêm Nội Dung</button>
                        <button id="show-less" class="hover:text-red-500 text-[#189EFF] font-normal text-[13px] leading-[39px] hidden">Thu Gọn Nội Dung</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    ${Footer()}
`;
};

export default ProductPage;

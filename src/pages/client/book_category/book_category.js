import axios from "axios"
import { discount, priceFormat, rating, useEffect, useState } from "../../../../lib"
import Header from "../header_client/header"
import nav_bar from "../nav_bar_client/nav_bar"
import Footer from "../footer_client/footer"

const book_category = (name) => {
    const [books, setBooks] = useState([])
    const getBook = async () => {
        const { data } = await axios.get(`http://localhost:3000/books/?categories.name=${name}`)

        setBooks(data)
        console.log(data);
    }
    useEffect(() => {
        getBook()
    }, [])
    // console.log(books);
    return (

        `
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
                        <a href="/pho-bien" id="popularProducts" class="hover:text-red-500">Phổ biến</a>
                        <button id="bestSellerProducts" class="hover:text-red-500">Bán chạy</button>
                        <button id="" class="hover:text-red-500">Hàng mới</button>
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
    
                <div class="grid grid-cols-3 gap-4 pb-[100px] mt-4">
                ${books
            .map(function (book, index) {
                return /*html*/ `
              
                      <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-4">
                      <a href="/products/${book.id}&cate_id=${book.categories?.id}">
                          <img class="rounded-t-lg w-full px-5 h-[250px]" src="${book.images?.[0].base_url}" alt="" />
                      </a>
                      <div class="p-5">
                          <a href="/products/${book.id}">
                              <h5 class="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">${book.name}</h5>
                          </a>
                         <div class="flex">
                         <p class="mb-3 text-[10px]">${rating(book.rating_average)}</p>
                         <p class="text-[12px] font-normal leading-[16px] text-[#787878] px-12">Đã bán ${book.quantity_sold?.value > 1000
                        ? "1000+" : book.quantity_sold?.value ?? 0}</p>
                         </div>
                         <div class="flex">
                         <p class="text-[16px] font-normal leading-[24px] text-[#FF424E] p-1">${priceFormat.format(book.current_seller?.price)}</p>
                         <div class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-2 mx-7">
                             <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] mx-0.5">-${discount(book.original_price, book.current_seller?.price)}%</p>
                         </div>
                     </div>
                      </div>
                  </div> `;
            })
            .join("")}
                    </div >
                </div >
            </div >
        </div>
        ${Footer()}`

    )
}

export default book_category
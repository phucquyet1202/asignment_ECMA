import { discount, useEffect, useState, priceFormat, rating } from "../../../../lib"
import Footer from "../footer_client/footer"
import Header from "../header_client/header"

const search = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(' http://localhost:3000/books')
            .then((res) => res.json())
            .then((data) => setData(data))

    }, [])

    const books = data.filter((item) => {
        return item.name.toLowerCase().includes(sessionStorage.getItem('name'))
    })
    if (books.length > 0) {
        return ` 
    ${Header()}
    <div class="container mx-auto w-2/3 my-5">
    <span>Từ khóa tìm kiếm với </span>
    <span class="text-red-600 font-bold">${sessionStorage.getItem('name')}</span>
    <div class="grid grid-cols-4 gap-2 pb-[100px]">
     
    ${books.map((book) => {
            return /*html*/ `
        <div class="m-3">
            <div class="w-[200px] h-[200px] mx-auto p-1">
                <a href="/products/${book.id}&cate_id=${book.categories?.id}">
                    <img src="${book.images?.[0].base_url
                }" class="w-[auto] h-[200px] transition-all ease-in-out duration-300 transform hover:scale-110" />
                </a>
            </div>

            <div class="p-3 pt-5">
                <a href="/products/${book.id}" class="hover:text-red-500 text-[13px] font-normal leading-[20px]">${book.name}</a>
                <div class="flex pt-3 pb-3">
                    <div class="flex border-r-[1px] h-[15px]">
                        <p class="text-[8px] pr-2 pt-0.5">${rating(
                    book.rating_average
                )}</p>
                    </div>
                    <p class="text-[12px] font-normal leading-[16px] text-[#787878] pl-2">Đã bán ${book.quantity_sold?.value > 1000
                    ? "1000+"
                    : book.quantity_sold?.value ?? 0
                }</p>
                </div>
                <div class="flex">
                    <p class="text-[16px] font-normal leading-[24px] text-[#FF424E] p-1">${priceFormat.format(
                    book.current_seller?.price
                )}</p>
                    <div class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-2">
                        <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">-${discount(
                    book.original_price,
                    book.current_seller?.price
                )}%</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        }).join('')}
    </div >
    </div>
${Footer()}
    `
    } else {
        return `
    ${Header()}
    <div class="container mx-auto my-16">
    <span>Từ khóa tìm kiếm với </span>
    <span class="text-red-600 font-bold">${sessionStorage.getItem('name')}</span>
        <p class="text-center my-4">không có sản phẩm nào</p>
    </div>
    ${Footer()}`
    }
}
export default search
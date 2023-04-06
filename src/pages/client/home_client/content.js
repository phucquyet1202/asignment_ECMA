import { useEffect, useState, rating, priceFormat, discount } from "../../../../lib";

const content = ({ newdata }) => {
  return `
    ${newdata
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
    `;
};
export default content;

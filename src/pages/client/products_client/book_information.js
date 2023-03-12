import {
  discount,
  priceFormat,
  rating,
  useEffect,
  useState,
} from "../../../../lib";

const book_information = (book) => {
  useEffect(function () {
    // sử lý số lượng

    const input = document.getElementById("input");
    const decrea = document.getElementById("decrea");
    const increa = document.getElementById("increa");
    let quantity = 1;
    decrea.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
      }
      input.value = quantity;
    });

    increa.addEventListener("click", () => {
      quantity++;
      input.value = quantity;
    });

    input.addEventListener("input", () => {
      quantity = parseInt(quantity);
      quantity = isNaN(quantity) || quantity === 0 ? 1 : quantity;
      input.value = quantity;
    });
  });
  return `
    <div class="flex text-[13px] leading-[20px] font-normal  pt-6">
                        <p class="text-[#242424]">Tác giả:</p>
                        <a href="" class="text-[#0D5CB6] ml-1 hover:text-red-500">${
                          book?.authors
                            ? book.authors[0].name
                            : "Không có tác giả"
                        }</a>
                    </div>

                    <div class="pl-3">
                        <h1 class="uppercase text-[23px] leading-[32px] font-normal text-[#242424]">${
                          book?.name
                        }</h1>
                        <div class="flex pt-3 pb-3">
                            <div class="flex border-r-[1px] h-[15px]">
                                <p class="text-[8px] pr-2 pt-0.5">${rating(
                                  book?.rating_average
                                )}</p>
                            </div>
                            <p class="text-[12px] font-normal leading-[16px] text-[#787878] pl-2">Đã bán ${
                              book?.quantity_sold?.value > 1000
                                ? "1000+"
                                : book?.quantity_sold?.value ?? 0
                            }</p>
                        </div>
                    </div>

                    <div class="flex bg-[#FAFAFA] rounded-[4px] w-[479px] h-[103px] m-3 p-3">
                        <h1 class="text-[32px] leading-[40px] font-normal text-[#FF424E] pt-3">
                            ${priceFormat.format(book?.current_seller?.price)}
                        </h1>
                        <p class="text-[13px] leading-[20px] font-normal text-[#808089] pt-8 pl-2">
                            <del>${priceFormat.format(
                              book?.original_price
                            )}</del>
                        </p>
                        <div
                            class="w-[40autopx] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-8 ml-2">
                            <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">
                                -${discount(
                                  book?.original_price,
                                  book?.current_seller?.price
                                )}%</p>
                        </div>
                    </div>

                    <div class="border-t-[1px] p-5">
                        <p class="text-[15px] leading-[24px] font-normal text-[#000000]">Số lượng:</p>

                        <div class="flex pt-2">
                            <button id="decrea" class="hover:bg-red-500 border-[1px] bg-[#FFFFFF] w-[30px] h-[30px]">
                                <p>-</p>
                            </button>

                            <input type="text" id="input" class="w-[50px] border-[1px] border-[#ECECEC] bg-[#fff] h-[30px] outline-0 text-center" value="1">

                            <button id="increa" class="hover:bg-red-500 border-[1px] bg-[#FFFFFF] w-[30px] h-[30px]">
                                <p>+</p>
                            </button>
                        </div>

                        <div class="w-[auto] h-[48px] bg-[#FF3945] rounded-[4px] mt-3">
                            <button id="add-cart" class="text-center w-full h-full">
                                <p class="text-[14px] leading-[24px] font-normal text-[#FFFFFF] capitalize hover:text-yellow-500">Thêm Vào Giỏ Hàng</p>
                            </button>
                        </div>
                    </div>`;
};
export default book_information;

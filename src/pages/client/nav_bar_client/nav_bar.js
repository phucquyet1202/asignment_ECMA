import { useEffect, useState } from "../../../../lib";

const nav_bar = function () {
  const [data, setData] = useState([]);
  useEffect(function () {
    fetch("http://localhost:3000/books")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data);
      });
  }, []);
  let newListCate = [];

  return /*html*/ `
<div class="mx-auto pl-[150px] mt-2">
    <div class="grid grid-cols-1">
        <h1 class="text-[13px] leading-[20px] font-normal pl-3 pb-[14px] uppercase text-[#242424]">Danh Mục Sản Phẩm
        </h1>
        ${data
          .map(function (book, index) {
            if (!newListCate.includes(book.categories?.name)) {
              newListCate.push(book.categories?.name);
              return /*html*/ `
        <a href=""
            class="hover:text-red-500 text-[12px] leading-[20px] font-normal pl-3 pb-[8px] text-[#242424]">${book.categories?.name}</a>
            `;
            }
          })
          .join("")}
    </div >
</div >
`;
};

export default nav_bar;

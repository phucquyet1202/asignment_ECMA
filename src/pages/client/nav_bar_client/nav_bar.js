import { useEffect, useState } from "../../../../lib";

const nav_bar = function () {
  const [data, setData] = useState([]);
  const [cate, setCate] = useState([]);
  useEffect(function () {
    fetch("http://localhost:3000/books")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data);
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

  return /*html*/ `
<div class="mx-auto pl-[150px] mt-7">
    <div class="grid grid-cols-1">
        <h1 class="text-[16px] leading-[20px] font-normal pl-3 pb-[14px] uppercase text-[#242424]">Danh Mục Sản Phẩm
        </h1>
        ${data
      .map(function (book, index) {
        if (!newListCate.includes(book.categories?.name)) {
          newListCate.push(book.categories?.name);
          return /*html*/ `
        <button  data-id="${book.categories?.id}" class="cate hover:text-red-500 text-[15px] leading-[20px] font-normal pl-3 pb-[8px] text-[#242424]">${book.categories?.name}</button>
            `;
        }
      })
      .join("")}
    </div >
</div >
`;
};

export default nav_bar;

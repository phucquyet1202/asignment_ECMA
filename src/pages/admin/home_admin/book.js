import { useEffect, useState } from "../../../../lib";

const book = () => {
  const [data, getData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getData(data);
      });
  }, []);
  useEffect(() => {
    const btn_delete = document.querySelectorAll(".btn-delete");
    console.log(btn_delete);
    btn_delete.forEach((item) => {
      // console.log(item.dataset.id);
      item.addEventListener("click", () => {
        alert("ban co chac chan xoa ko");
        delet(item.dataset.id);
        window.location.href = "/adminBook";
      });
    });
  });
  const delet = (id) => {
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    }).then(() => console.log("xoa thanh cong"));
  };
  return `
  <div class="container mx-auto">
  <div class="border-2 border-orange-400 w-[100px] my-4">
   <div class="">
   <a href="/add" class="px-2   font-semibold" type="submit" id="add">Thêm Mới</a>
    
   </div>
  </div>
  <table  class="mx-16">
    <tr class=" bg-slate-200 ">
    <th class="px-5 border-collapse border border-slate-400 ">stt</th>
    <th class="px-5 border-collapse border border-slate-400  ">Tên sách</th>
    <th class="px-5 border-collapse border border-slate-400 ">hình ảnh</th>
    <th class="px-5 border-collapse border border-slate-400 ">Giá sách</th>
    <th class="px-5 border-collapse border border-slate-400 ">Danh mục</th>
    <th class="px-5 border-collapse border border-slate-400 ">Hành động</th>

    </tr>
 
  ${data
    .map((item, index) => {
      return `
    <div>
        <tr class="">
        <td class="border-collapse border border-slate-400 px-3 ">${
          index + 1
        }</td>
        <td class="border-collapse border border-slate-400 px-3 w-[250px] ">${
          item.name
        }</td>
        <td class="border-collapse border border-slate-400 px-3 "><img src="${
          item.images?.[0].base_url
        }" class="w-[200px] h-[200px] p-2" alt=""></td>
        <td class="border-collapse border border-slate-400 px-3 ">${
          item.original_price
        }</td>
        <td class="border-collapse border border-slate-400 px-3 ">${
          item.categories?.name
        }</td>
        <td class="font-semibold border-collapse border border-slate-400 px-6 "><button data-id="${
          item.id
        }" class="btn-delete hover:text-red-500">Xóa</button>/<a href="/edit/${
        item.id
      }" class="btn-update hover:text-green-500">Sửa</a></td>
        </tr>
    </div>`;
    })
    .join("")}
  </table>
  </div>`;
};
export default book;

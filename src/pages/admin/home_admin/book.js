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
      item.addEventListener("click", (e) => {
        e.preventDefault()
        alert("ban co chac chan xoa ko");
        delet(item.dataset.id);
        window.location.href = "/adminBook";
      });
    });
  });
  const delet = (id) => {
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    }).then(() => alert("xoa thanh cong"));
  };
  return /*html*/`
  <div class="container mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
  <div class="border-2 border-orange-400 w-[100px] my-4">
   <a href="/add" class="px-2   font-semibold" type="submit" id="add">Thêm Mới</a>
    
   </div>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-3">
                  STT
              </th>
              <th scope="col" class="px-6 py-3">
                  Tên sách
              </th>
              <th scope="col" class="px-6 py-3">
                  Hình ảnh
              </th>
              <th scope="col" class="px-6 py-3">
                  Giá sách
              </th>
              <th scope="col" class="px-6 py-3">
              Danh mục
          </th>
              <th scope="col" class="px-6 py-3">
                  Hành động
              </th>
          </tr>
      </thead>
      <tbody>
      ${data.map((item, index) => {
    return (/*html */
      `<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-[15px]">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          ${index + 1}
          </th>
          <td class="px-10 py-4 w-1/5">
          ${item.name}
          </td>
          <td class="px-6 py-4 w-[200px] h-[230px] ">
         <img class="" src=" ${item.images?.[0].base_url}" alt="">
          </td>
          <td class="px-6 py-4">
          ${item.original_price}
          </td>
          <td class="px-6 py-4">
          ${item.categories?.name}
      </td>
          <td class="px-6 py-4 text-[18px]">
          <button data-id="${item.id}" class="btn-delete hover:text-red-500">Xóa</button>/<a href="/edit/${item.id}" class="btn-update hover:text-green-500">Sửa</a></td>
          </td>
      </tr>
      
          `
    )
  }).join('')}
          
      </tbody>
  </table>
</div>`
};
export default book;

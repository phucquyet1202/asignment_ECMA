import { useEffect, useState } from "../../../../lib";
import Footer from "../footer_admin/footer";
import Header from "../header_admin/header";

const edit = (id) => {
  const [data, setData] = useState({});
  useEffect(function () {
    fetch(`http://localhost:3000/books/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (book) {
        setData(book);
      });
  }, []);
  useEffect(() => {
    const nameBook = document.querySelector("#ten");
    const gia = document.querySelector("#gia");
    const btnEdit = document.querySelector("#edit");
    btnEdit.addEventListener("click", (e) => {
      e.preventDefault();
      const newBook = {
        ...data,
        name: nameBook.value,
        original_price: gia.value,
        images: [{
          base_url: anh.value
        }]
      };
      fetch(`http://localhost:3000/books/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBook),
      }).then(() => (window.location.href = "/adminBook"));
    });
  });
  return `
  ${Header()}
  <div class="w-1/2 container mx-auto">
  <div class="w-[80%] mx-auto p-5">
      <h1 class="block text-gray-700 text-[20px] font-bold mb-2 text-center">
          Thêm mới sản phẩm
      </h1>

      <form action="">
          <div class="p-3">
              <p class="block text-gray-700 text-sm font-bold mb-2">Tên sách</p>
              <input type="text" id="ten" value="${data.name
    }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"/>
          </div>

          
          <div class="p-3">
              <p class="block text-gray-700 text-sm font-bold mb-2">Đơn giá</p>
              <input type="text" id="gia" value="${data.original_price
    }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"/>
          </div>
          <div class="p-3">
          <p class="block text-gray-700 text-sm font-bold mb-2">anh</p>
          <input type="text" id="anh" value="${data.images?.[0]?.base_url
    }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"/>
      </div>

      
          

          <div class="text-center p-3">
              <button id="edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a href="/adminBook">
                      Sửa
                  </a>
              </button>
          </div>
      </form>
  </div>
</div>


      </form>
  </div>
  ${Footer()}
   `;
};
export default edit;

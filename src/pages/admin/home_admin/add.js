import { useEffect, useState } from "../../../../lib";
import Footer from "../footer_admin/footer";
import Header from "../header_admin/header";

const add = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const nameBook = document.querySelector("#ten");
    const anh = document.querySelector("#anh");
    const gia = document.querySelector("#gia");
    const giam_gia = document.querySelector("#giam_gia");
    const cate = document.querySelector("#cate");
    console.log(cate);
    const btnAdd = document.querySelector("#them");
    btnAdd.addEventListener("click", (e) => {
      e.preventDefault()
      // alert(cate.value);
      const newBook = {
        name: nameBook.value,
        images: [
          {
            base_url: anh.value,
          },
        ],
        original_price: gia.value,
        categories: {
          name: cate.value,
        },
        current_seller: {
          price: giam_gia.value
        }
      };
      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
      window.location.href = "/adminBook";
    });
  });
  const newListCate = [];

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
                <input type="text" id="ten" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"/>
            </div>

            <div class="p-3">
                <p class="block text-gray-700 text-sm font-bold mb-2">ảnh</p>
                <input type="text" id="anh" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"/>
            </div>

            <div class="p-3">
                <p class="block text-gray-700 text-sm font-bold mb-2">Đơn giá</p>
                <input type="number" id="gia" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"/>
            </div>

            <div class="p-3">
            <p class="block text-gray-700 text-sm font-bold mb-2">Giảm giá</p>
            <input type="number" id="giam_gia" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"/>
        </div>
            <div class="p-3">
                <p class="block text-gray-700 text-sm font-bold mb-2">Tên danh mục</p>
                <div>
                            <select id="cate" >
                            ${data
      .map((cate) => {
        if (
          !newListCate.includes(cate.categories?.name)
        ) {
          newListCate.push(cate.categories?.name);
          return `
                                  <option >${cate.categories.name}</option> `;
        }
      })
      .join("")}
                            </select>
                            </div>
            </div>

            <div class="text-center p-3">
                <button id="them" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <a href="/adminBook">
                        Thêm mới
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
export default add;

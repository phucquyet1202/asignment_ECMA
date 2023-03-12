import { useEffect, useState } from "../../../../lib";

const Header = function () {
  const [data, setData] = useState([]);
  const id_user = sessionStorage.getItem("idUser");

  useEffect(function () {
    fetch(`http://localhost:3000/users/${id_user}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  }, []);

  useEffect(function () {
    const input = document.getElementById("search");
    const button = document.getElementById("submit");
    // search();

    const isLogin = sessionStorage.getItem("isLogin");
    const role = sessionStorage.getItem("role");
    console.log(isLogin);
    if (isLogin === "true") {
      if (role === "admin") {
        document.getElementById("login").innerHTML = /*html*/ `
        <div class="flex mt-1 ml-2">
            <p>${data.name}</p>/
           <button id="logout" class="hover:text-red-500">Đăng xuất</button>
           <div>
                  <a href="/adminBook" class="px-6 hover:text-red-600">Admin</a>
                </div>
        </div>
        `;
      } else {
        document.getElementById("login").innerHTML = /*html*/ `
        <div class="flex mt-1 ml-2">
            <p>${data.name}</p>/
           <button id="logout" class="hover:text-red-500">Đăng xuất</button>
        </div>
        `;
      }

      const logout = document.querySelector("#logout");
      logout.addEventListener("click", () => {
        sessionStorage.removeItem(`isLogin`);
        sessionStorage.removeItem(`id_user`);

        window.location.href = "http://localhost:5173/";
      });
    } else {
      document.getElementById("login").innerHTML = /*html*/ `
        <div class="flex mt-2 ml-3">
           <a href="/login" class="hover:text-red-500">Đăng nhập</a>/<a href="/register" class="hover:text-red-500">Đăng ký</a>
            <i class="fa fa-caret-down mt-1 ml-1"></i>
        </div>
        `;
    }
  });
  // tim kiem
  useEffect(() => {
    document.querySelector('#submit').addEventListener('click', () => {
      sessionStorage.setItem('name', document.querySelector("#search").value)
    })
  })

  return /*html*/ `
    <div class="w-full bg-[#1A94FF]">
        <div class="flex justify-around h-[100px] w-[1200px] mx-auto">
            <div class="my-auto">
                <a href="/"> 
                    <img src="/src/pages/img/tiki1.png" alt="" class="w-[60px] h-[40px] mb-[11px]">
                </a>
                <img src="/src/pages/img/freeship.png" alt="" class="w-[83px] h-[12px]">
            </div>

            <div class="my-auto flex">
                <input id="search" type="text" class="outline-0 w-[500px] h-[40px] pl-5">
                <a href="/search">
                <button type="submit" id="submit" class="bg-[#0D5CB6] h-[40px] w-[120px] text-white flex hover:bg-blue-900">
                    <img src="/src/pages/img/timkiem.png" alt="" class="w-[20px] h-[20px] mt-[11px] ml-5">
                    <p class="text-[13px] font-normal leading-[15px] mt-3 ml-1">Tìm kiếm</p>
                </button>
                </a>
            </div>
            
            <div class="flex text-white my-auto">
                <img src="/src/pages/img/dang_nhap.png" alt="" class="w-[32px] h-[32px] mr-2">
                <div id="login">
                </div>

                <div class="my-auto text-white flex hover:text-red-500">
                    <img src="/src/pages/img/giohang.png" alt="" class="w-[32px] h-[32px] ml-5">
                    <a href="" class="text-[11px] mt-4 ml-1 font-normal leading-[14px]">Giỏ hàng</a>
                </div>
                
            </div>
        </div>
    </div>

    <div class="w-full bg-[#F5F5FA]  ">
        <div class="px-[110px] py-3 container mx-auto">
            <a href="/">Trang chủ></a>
            <a href="#">Nhà Sách Tiki</a>
        </div>
    </div>
    `;
};

export default Header;

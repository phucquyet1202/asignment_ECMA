import { useEffect, useState } from "../../../../lib";

const getUser = function () {
  document.title = "Đăng nhập";

  const [data, setData] = useState([]);

  useEffect(function () {
    fetch("http://localhost:3000/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
        console.log(data);
      });
  }, []);

  useEffect(function () {
    document
      .getElementById("btn_submit")
      .addEventListener("click", function () {
        // e.preventDefault()
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        data.forEach(function (data1) {
          if (data1.email == username && data1.password == password) {
            sessionStorage.setItem("isLogin", "true");
            sessionStorage.setItem("idUser", data1.id);
            sessionStorage.setItem("role", data1.role);
          }
        });
      });
    const isLogin = sessionStorage.getItem("isLogin");
    if (isLogin === "true") {
      window.location.href = "http://localhost:5173/";
    }
  });
  // console.log(data);
  return /*html*/ `
        <div class="bg-[#f8f8f8] h-[700px]">
            <div class="text-center p-10">
                <h1 class="text-[48px] text-[#333333] font-semibold tracking-[0.1px] uppercase">
                    xin chào
                </h1>

                <h3 class="text-[18px] text-[#333333] font-normal tracking-[0.5px] mt-[10px] leading-none">
                    Đăng nhập vào tài khoản của bạn
                </h3>
            </div>

            <div class="rounded-[5px] bg-[#79c0ff] w-[500px] grid -grid-cols-1 mx-auto mt-5 border-[2px]">
                <form>
                    <div class="mt-10">
                        <div class="m-5">
                        <input class="p-5 h-[45px] border-[2px] outline-0 text-[#333333] rounded-[5px] w-[460px]" type="text" placeholder="Tên người dùng" id="username" autocomplete="off"/>
                        </div>

                        <div class="m-5">
                            <input class="p-5 h-[45px] border-[2px] outline-0 text-[#333333] rounded-[5px] w-[460px]" type="password" placeholder="Password" id="password" />
                        </div>

                        <div class="grid grid-cols-1">
                            <button id="btn_submit" class="mx-auto  text-blue-900 hover:underline hover:text-[#E52323]">
                                    <p class="mx-autotext-[#ffffff]">Đăng nhập</p>
                            </button>

                            <div class="text-center m-5">
                                <a href="/register" class="text1">Bạn chưa có tài khoản đăng ký?</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `;
};

export default getUser;

import { useEffect } from "../../../../lib";
import Header from "../header_client/header";

const addUser = () => {
  useEffect(() => {
    document.querySelector("body").innerHTML = /*html*/ `
    ${Header()}
    <div class="mt-2">
    <div class="container mx-auto mt-5 mb-5">
      <div class="mx-auto bg-[#79c0ff] w-[400px] h-[600px] rounded-lg">
        <form action="" class="flex flex-col w-[300px] ml-[50px]">
          <h1 class="mt-7 mb-6 text-[24px] text-center font-bold">Đăng ký</h1>
            <div class="mb-4">
              <input type="text" id="username" placeholder="Nhập Họ Và Tên" class="pl-2 rounded-lg h-[35px] w-full" name="fullname" required>
              <!-- <span class="errorMsg">Lỗi</span> -->
            </div>

            <div class="mb-4">
              <input type="email" id="email" placeholder="Nhập email" class="pl-2 rounded-lg h-[35px]  w-full" name="email" required>

            </div>

            <div class="mb-4">
              <input type="password" id="password" placeholder="Nhập mật khẩu" class="pl-2 rounded-lg h-[35px] w-full" name="password" required>
              <span class="errorMsg" id="error-2"></span>
            </div>
            <div class="mb-4">
            <input type="text" id="address" placeholder="Nhập địa chỉ" class="pl-2 rounded-lg h-[35px] w-full" name="address" required>
            <span class="errorMsg" id="error-2"></span>
          </div>

          <button class="bg-[#D73C3C] text-white text-[20px] w-[100px] h-[30px] rounded-[10px] mx-auto hover:bg-green-500" id="btn_register">Đăng ký</button>

          <div class="text-white  text-center mt-5 text-[16px]">
            Bạn đã có tài khoản? <a class="mr-6 text-blue-900 hover:underline hover:text-[#E52323]" href="">Đăng nhập</a>
          </div>
        </form>
      </div>
    `;

    document
      .querySelector("#btn_register")
      .addEventListener("click", function () {
        const newUser = {
          name: document.querySelector("#username").value,
          password: document.querySelector("#password").value,
          email: document.querySelector("#email").value,
          address: document.querySelector("#address").value,
          role: "user",
        };
        fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        // console.log(newUser);
      });
  });
};
export default addUser;

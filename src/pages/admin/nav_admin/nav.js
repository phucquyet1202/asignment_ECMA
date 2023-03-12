const nav_bar = function () {
  return /*html*/ `
<div class="mx-auto pl-[150px] mt-2">
    <div class="grid grid-cols-1">
        <h1 class="text-[16px] font-semibold leading-[20px] pl-3 pb-[14px] uppercase text-[#242424]">Trang quản trị
        </h1>
      <div>
      <a href="/adminBook"
      class="hover:text-red-500 text-[15px] leading-[20px] font-normal pl-3 pb-[8px] text-[#242424]">Quản lý sách</a>
     
      </div>

      <div>
      <a href="/show_user"
      class="hover:text-red-500 text-[15px] leading-[20px] font-normal pl-3 pb-[8px] text-[#242424]">Quản lý user</a>
     
      </div>
        
    </div >
</div >
`;
};

export default nav_bar;

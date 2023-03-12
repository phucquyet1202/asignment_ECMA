import { useEffect, useState } from "../../../../lib";
import Header from "../header_admin/header";
import nav_bar from "../nav_admin/nav";

const show_user = () => {
  const [data, getData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => getData(data));
  }, []);
  return `
  ${Header()}
  ${nav_bar()}
  <div class="container mx-auto">
  <table  class="mx-16">
  <tr class=" bg-slate-200 ">
  <th class="px-5 border-collapse border border-slate-400 ">stt</th>
  <th class="px-5 border-collapse border border-slate-400  ">Tên use</th>
  <th class="px-5 border-collapse border border-slate-400 ">Email</th>
  <th class="px-5 border-collapse border border-slate-400 ">Địa chỉ</th>
  <th class="px-5 border-collapse border border-slate-400 ">vai trò</th>
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
        <td class="border-collapse border border-slate-400 px-3 ">${
          item.email
        }</td>
        <td class="border-collapse border border-slate-400 px-3 ">${
          item.address
        }</td>
        <td class="border-collapse border border-slate-400 px-3 ">${
          item.role
        }</td>`;
    })
    .join("")}
  </table>
  </div>
  `;
};
export default show_user;

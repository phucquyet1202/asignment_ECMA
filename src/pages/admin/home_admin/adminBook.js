import Footer from "../footer_admin/footer";
import Header from "../header_admin/header";
import nav_bar from "../nav_admin/nav";
import App from "./book";
// import book from "./book";

const adminBook = () => {
  return `
  <div>
  ${Header()}
  </div>
  ${nav_bar()}
<div>
    ${App()}
</div>
<div class="mt-16">
    ${Footer()}
</div>
  `;
};
export default adminBook;

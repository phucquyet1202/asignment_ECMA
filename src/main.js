import { render, router } from "../lib";
import "./style/main.css";
import homePage from "./pages/client/home_client/home";
import addUser from "./pages/client/logout_login_register/register";
import getUser from "./pages/client/logout_login_register/login";
import adminBook from "./pages/admin/home_admin/adminBook";
import add from "./pages/admin/home_admin/add";
import ProductPage from "./pages/client/products_client/products";
import edit from "./pages/admin/home_admin/edit";
import show_user from "./pages/admin/user_admin/show_user_admin";
import search from "./pages/client/search/search";

// Khai bao DOM
var app = document.querySelector("#app");

router.on("/", function () {
  console.log("Product Page");
  render(homePage, app);
});

router.on("/products/:id&cate_id=:cate_id", function ({ data }) {
  console.log("Product Detail Page");
  render(() => ProductPage(data.id, data.cate_id), app);
});

router.on("/search", function () {
  console.log("Search Page");
  render(search, app);
});

router.on("/register", function () {
  console.log("register Page");
  render(addUser, app);
});

router.on("/login", function () {
  console.log("login Page");
  render(getUser, app);
});

router.on("/adminBook", function () {
  render(adminBook, app);
});

router.on("/add", function () {
  render(add, app);
});

router.on("/edit/:id", function ({ data }) {
  render(() => edit(data.id), app);
});

router.on("/show_user", function () {
  render(show_user, app);
});
router.resolve();

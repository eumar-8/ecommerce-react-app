export default (product, qty) => {
  console.log(product, qty);
  let cart = JSON.parse(localStorage.getItem("cart"));
  let obj = { ...product, qty: qty || 1 };
  if (!cart) {
    let cart = [];
    cart.push(obj);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart.push(obj);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  console.log("i am from local storage", localStorage.getItem("cart"));
};

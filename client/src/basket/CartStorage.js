export default (product, qty, count) => {
  //console.log(product, qty, count);
  let cart = JSON.parse(localStorage.getItem("cart"));
  let obj = { ...product, qty: qty || 1, count: count + 1 };
  if (!cart) {
    let cart = [];
    cart.push(obj);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart.push(obj);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("I am count from local storage", cart[cart.length - 1].count);
  }
  console.log("i am from local storage", localStorage.getItem("cart"));
};

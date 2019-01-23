export default (product, qty, count) => {
  //console.log(product, qty, count);
  let cart = JSON.parse(localStorage.getItem("cart"));
  let obj = { ...product, qty: qty || 1, count: count + 1 };
  if (!cart) {
    let cart = [];
    let qty = 0;
    cart.push(obj);
    qty = qty + parseInt(obj.qty);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("qty", JSON.stringify(qty));
    console.log("****************************", qty);
    console.log("I am  creating", cart[cart.length - 1].count);
  } else {
    cart.push(obj);
    qty = parseInt(obj.qty) + parseInt(obj.qty);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("qty", JSON.stringify(qty));
    console.log("#########################", qty);
    console.log("I am count from local storage", cart[cart.length - 1].count);
  }
  console.log("i am from local storage", localStorage.getItem("cart"));
};

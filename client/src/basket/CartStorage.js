export default (product, qty, count) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let obj = { ...product, qty: qty || 1, count: count + 1 };
  console.log("$$$$$$$$$$$$$$$", obj);
  if (!cart) {
    let cart = [];
    cart.push(obj);
    //qty = qty + parseInt(obj.qty);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("qty", JSON.stringify(count));
    //console.log("****************************", qty);
    //console.log("I am  creating", cart[cart.length - 1].count);
  } else {
    cart.push(obj);
    count += parseInt(obj.qty);

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("qty", JSON.stringify(count));
  }
  console.log("i am from local storage", localStorage.getItem("cart"));
  console.log("i am from local storage quantity", localStorage.getItem("qty"));
};

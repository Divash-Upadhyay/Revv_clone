var carObj = JSON.parse(localStorage.getItem("car_details"));

var title = document.querySelector("#cartitle");
title.textContent = carObj.name;

var fuel = document.querySelector("#fuel");
fuel.textContent = carObj.fuel;

var seats = document.querySelector("#seats");
seats.textContent = `seats ${carObj.seats}`;

var transmission = document.querySelector("#transmission");
transmission.textContent = carObj.transmission;

var image = document.querySelector("#carimage");
image.src = carObj.url;

var price = document.querySelector("#price");
price.textContent = carObj.price;

var total_price = Number(carObj.price) + 1400;

document.querySelector("#total_price").textContent = total_price;

// -------------------------------------------------------------------

var locationObj = JSON.parse(localStorage.getItem("bookingdata"));

var startdate = document.querySelector("#startdate");
startdate.textContent = locationObj.startdate;

var enddate = document.querySelector("#enddate");
enddate.textContent = locationObj.enddate;

var cityname = document.querySelector("#cityname");
cityname.textContent = locationObj.cityname;

// ---------------------------------------------------------------------

document.querySelector("#paybtn").addEventListener("click", payment);

function payment() {
  setTimeout(() => {
    window.location.href = "payment.html";
  }, 3000);

  localStorage.setItem("totalPrice", total_price);
}

  let location_Time_data = JSON.parse(localStorage.getItem("bookingdata"));
  var fdata
  const car=async()=>{
  try{
    const url="https://my-revv-api2.herokuapp.com/data"
      const data=await fetch(url)
       fdata=await data.json()
      // console.log(fdata)
      display_cars(fdata)
  }
  catch(e){
    console.log(e)
  }
     
  
    }
  car()
  
    document.querySelector(".city").textContent = location_Time_data.cityname;
    document.querySelector(".city_location").textContent =
      location_Time_data.cityname;
    document.querySelector(
      "#start_date126"
    ).textContent = `Start Date:-  ${location_Time_data.startdate} `;
    document.querySelector(
      "#end_date126"
    ).textContent = `End Date:- ${location_Time_data.enddate}`;
  
    document.querySelector("#hatchback").addEventListener("change", hatchFilters);
    function hatchFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#hatchback").value;
      // console.log(selected);
      if (document.querySelector("#hatchback").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.segment == selected;
        });
        display_cars(category_126);
      } else {
        car()
      }
    }
  
    document.querySelector("#sedan").addEventListener("change", sedenFilters);
    function sedenFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#sedan").value;
      // console.log(selected);
      if (document.querySelector("#sedan").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.segment == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#suv").addEventListener("change", suvFilters);
    function suvFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#suv").value;
      // console.log(selected);
      if (document.querySelector("#suv").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.segment == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#muv").addEventListener("change", muvFilters);
    function muvFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#muv").value;
      // console.log(selected);
      if (document.querySelector("#muv").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.segment == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#maruti").addEventListener("change", marutiFilters);
    function marutiFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#maruti").value;
      // console.log(selected);
      if (document.querySelector("#maruti").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.brand == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#hyundai").addEventListener("change", hyundaiFilters);
    function hyundaiFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#hyundai").value;
      // console.log(selected);
      if (document.querySelector("#hyundai").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.brand == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document
      .querySelector("#mahindra")
      .addEventListener("change", mahindraFilters);
    function mahindraFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#mahindra").value;
      // console.log(selected);
      if (document.querySelector("#mahindra").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.brand == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#honda").addEventListener("change", hondaFilters);
    function hondaFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#honda").value;
      // console.log(selected);
      if (document.querySelector("#honda").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.brand == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#toyota").addEventListener("change", toyataFilters);
    function toyataFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#toyota").value;
      // console.log(selected);
      if (document.querySelector("#toyota").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.brand == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#diesel").addEventListener("change", dieselFilters);
    function dieselFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#diesel").value;
      // console.log(selected);
      if (document.querySelector("#diesel").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.fuel == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#petrol").addEventListener("change", petrolFilters);
    function petrolFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#petrol").value;
      // console.log(selected);
      if (document.querySelector("#petrol").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.fuel == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document
      .querySelector("#automatic")
      .addEventListener("change", automaticFilters);
    function automaticFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#automatic").value;
      // console.log(selected);
      if (document.querySelector("#automatic").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.transmission == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#manual").addEventListener("change", manualFilters);
    function manualFilters() {
      document.querySelector("#right").innerHTML = "";
      let selected = document.querySelector("#manual").value;
      // console.log(selected);
      if (document.querySelector("#manual").checked == true) {
        let category_126 = fdata.filter(function (ele) {
          return ele.transmission == selected;
        });
        display_cars(category_126);
      } else {
        display_cars(data);
      }
    }
  
    document.querySelector("#select_126").addEventListener("change", Pricesort);
  
    function Pricesort() {
      var selected = document.querySelector("#select_126").value;
      if (selected == "Low to High") {
        fdata.sort(function (a, b) {
          return Number(a.price) - Number(b.price);
        });
      }
      if (selected == "High to Low") {
        fdata.sort(function (a, b) {
          return Number(b.price) - Number(a.price);
        });
      }
      document.querySelector("#right").innerHTML = "";
      display_cars(fdata);
    }
  
    document.querySelector("#toggle").addEventListener("change", function () {
      if (document.querySelector("#toggle").checked == true) {
        document.querySelector("#exclude").textContent = "include";
      }
      if (document.querySelector("#toggle").checked == false) {
        document.querySelector("#exclude").textContent = "exclude";
      }
    });
  
    // document.querySelector("#sedan").addEventListener("change", filters);
  
    // function filters() {
    //   document.querySelector("#right").innerHTML = "";
    //   let selected = document.querySelector("#hatchback").value;
    //   // console.log(selected);
  
    //   if (document.querySelector("#sedan").checked == true) {
    //     let category_126 = data.filter(function (ele) {
    //       return ele.segment == selected;
    //     });
    //     display_cars(category_126);
    //   } else {
    //     display_cars(data);
    //   }
    // }
  
    // display_cars(data);
    function display_cars(data) {
      data.map(function (ele) {
        let div = document.createElement("div");
        div.setAttribute("class", "boxes126");
        let car_name = document.createElement("h3");
        car_name.textContent = ele.name;
  
        let image = document.createElement("img");
        image.setAttribute("class", "car_img126");
        image.src = ele.url;
  
        let small_row1 = document.createElement("div");
        small_row1.setAttribute("class", "small_row1");
  
        // TRANSMISSION
  
        let transmission_div = document.createElement("div");
        //   transmission_div.setAttribute("class", "transmission_div");
  
        let transmission_img = document.createElement("img");
        //   transmission_img.setAttribute("class", "transmission_img");
        transmission_img.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRv-2zbPaA--6Wv9GP0MEdHjVz845nXzR4Cw&usqp=CAU";
  
        let transmission = document.createElement("p");
        transmission.textContent = ele.transmission;
        transmission_div.append(transmission_img, transmission);
  
        // FUEL
  
        let fuel_div = document.createElement("div");
        let fuel_img = document.createElement("img");
        fuel_img.src = "https://static.thenounproject.com/png/43344-200.png";
  
        let fuel = document.createElement("p");
        fuel.textContent = ele.fuel;
  
        fuel_div.append(fuel_img, fuel);
  
        // SEAT
        let seat_div = document.createElement("div");
        let seat_img = document.createElement("img");
        seat_img.src = "https://static.thenounproject.com/png/1694451-200.png";
  
        let seat = document.createElement("p");
        seat.textContent = ele.seats + " " + "seats";
  
        seat_div.append(seat_img, seat);
  
        // PRICE ROW
  
        small_row1.append(transmission_div, fuel_div, seat_div);
  
        let small_row2 = document.createElement("div");
        small_row2.setAttribute("class", "small_row2");
  
        let price1_div = document.createElement("div");
        let price1 = document.createElement("h4");
        price1.textContent =
          "₹" + " " + (Math.floor(Math.random() * (1000 - 3100 + 1)) + 3100);
        let p1 = document.createElement("p");
        p1.textContent = "132 kms";
  
        let price2_div = document.createElement("div");
        let price2 = document.createElement("h4");
        price2.textContent =
          "₹" + " " + (Math.floor(Math.random() * (2500 - 4000 + 1)) + 4000);
        let p2 = document.createElement("p");
        p2.textContent = "242 kms";
  
        let price3_div = document.createElement("div");
        let price3 = document.createElement("h4");
        price3.textContent = "₹" + " " + ele.price;
        let p3 = document.createElement("p");
        p3.textContent = "440 kms";
  
        price1_div.append(price1, p1);
        price2_div.append(price2, p2);
        price3_div.append(price3, p3);
        small_row2.append(price1_div, price2_div, price3_div);
  
        // BUTTON ROW
  
        let small_row3 = document.createElement("div");
        small_row3.setAttribute("class", "small_row3");
  
        let extra_km_div = document.createElement("div");
        let extra_km = document.createElement("p");
        extra_km.textContent = "Extra km charge @ ₹ 8/km";
        extra_km_div.append(extra_km);
  
        let btn_div = document.createElement("div");
        let book_btn = document.createElement("button");
        book_btn.textContent = "Book";
        book_btn.addEventListener("click", function () {
          window.location.href = "details.html";
          car_details_data_send(ele);
        });
  
        book_btn.style.fontWeight = "Bold";
        btn_div.append(book_btn);
  
        small_row3.append(extra_km_div, btn_div);
  
        div.append(car_name, image, small_row1, small_row2, small_row3);
        document.querySelector("#right").append(div);
      });
    }
  
    // function car_details_data_send(ele, price1) {
    //   // console.log(ele);
    //   var book_price = {
    //     price: price1,
    //   };
    //   // localStorage.setItem("booking_Price", JSON.stringify(book_price));
    //   localStorage.setItem("car_details", JSON.stringify(ele));
    // }
  
    function car_details_data_send(ele) {
      // console.log(ele);
      var book_price = {
        ele: ele,
      };
      // localStorage.setItem("booking_Price", JSON.stringify(book_price));
      localStorage.setItem("car_details", JSON.stringify(ele));
    }
  
    function categorySort() {
      var selected = document.querySelector("#category").value;
  
      var categoryList = productsObject.filter(function (elem) {
        return elem.category == selected;
      });
      displayItem(categoryList);
    }
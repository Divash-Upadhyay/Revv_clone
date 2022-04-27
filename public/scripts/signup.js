document.querySelector("#btn").addEventListener("click", Register);

async function Register(event) {
  try {
    event.preventDefault();
    var Register_data = {
      first_name: document.getElementById("f_name").value,
      last_name: document.getElementById("l_name").value,
      email:document.getElementById("email").value,
      password: document.getElementById("password").value,
      mobile: document.getElementById("mobile").value,
    };

    Register_data = JSON.stringify(Register_data);
    console.log(Register_data);
    // window.location.href = "login.html";
  } catch (er) {
    console.log(er);
  }

  // let reg_api = ``;

  let response = await fetch("https://dbapptemp.herokuapp.com/register", {
    method: "POST",
    body: Register_data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  console.log(data);
  if (data.errors) {
    alert("Enter Valid Details");
  }
  else{
    window.location.href = "login.html";
  }
}
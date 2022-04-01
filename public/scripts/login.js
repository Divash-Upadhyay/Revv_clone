document.querySelector("#btn").addEventListener("click", login);

  async function login(e) {
    e.preventDefault();
    let login_Data = {
      email: document.getElementById("Email").value,
      password: document.getElementById("password").value,
    };

    login_Data = JSON.stringify(login_Data);

    let login_url = "http://localhost:2345/login";

    let response = await fetch(login_url, {
      method: "POST",
      body: login_Data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response)
    let data = await response.json();
    // console.log(data.error)
    if (data.message) {
      console.log(data);
      alert(data.message);
    } else {
      alert("Login Successful !");
      console.log(data);
      // let username = document.getElementById("username").value;
      // getUserDetails(username, data.token);
      window.location.href = "index.html";
    }
  }

  // async function getUserDetails(username, token) {
  //   let api = `http://localhost:2345/login`;

  //   let res = await fetch(api, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   let data = await res.json();
  //   console.log(data);
  //   document.querySelector("owner").textContent = data.name;
  // }

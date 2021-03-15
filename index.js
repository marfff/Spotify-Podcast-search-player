function validateForm(x) {
  var x = document.forms["myform"]["emailaddress"].value;
  let regex = /^([a-zA-z]{1,15})@([a-zA-z]{1,6})(\.com)$/;

  let isExisting = regex.test(x);
  // alert(isExisting);

  if (x == "") {
    alert("Oops! Please add your email -It can't be blank");
    return;
  }

  if (isExisting) {
    alert("HAPPY FACE :)");
    return;
  } else {
    alert("Oops! Please check your email-please enter a valid email");
    return;
  }
}

let clientId = "db9c4e35b9904312b3edb8b320d4656e";
let clientSecret = "7a3a0aad8fa04625bb22587da9976ac8";
var input1 = "cooking";
sEntered = "sss";
sEntered = document.getElementById("loginButton");
let send = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http://localhost:5500/&show_dialog=true&scope=user-read-private%20user-read-email&response_type=token`;
sEntered.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.replace(`${send}`);
  console.log("herreer");
});

const itemsElement = document.getElementById("items");

//parsing the address bar string
getCode = () => {
  // let code = null;
  const qString = window.location.href;
  let equalsplit = qString.split("=");
  // equalsplit.forEach((element, index) => console.log(element, index));
  let rxtoken = equalsplit[1].split("&")[0];
  window.localStorage = rxtoken;
  return rxtoken;
};

getCode();

let token = getCode();

class SearchSlider {
  constructor(elementId, token) {
    this.input = document.getElementById(elementId);
    this.input.addEventListener("keyup", () => {
      this.updateGenreSearch();
    });
    this.token = token;
  }

  async updateGenreSearch() {
    let result1 = await this.getShows();
    let x = 0;
    console.log("CL", result1.shows.items);
    itemsElement.innerHTML = "";

    //making html = inner HTML
    result1.shows.items.forEach((show, index) => {
      console.log("SHOW", show);

      const innerElement = document.createElement("div");
      innerElement.className = "inner";

      const imgElement = document.createElement("img");
      imgElement.className = "image";
      imgElement.id = index;
      imgElement.src = show.images[0].url;
      imgElement.height = 160;
      imgElement.width = 160;
      innerElement.appendChild(imgElement);

      const titleElement = document.createElement("p");
      titleElement.textContent = show.name;
      innerElement.appendChild(titleElement);

      itemsElement.appendChild(innerElement);
    });
  }

  async getShows() {
    const result = await fetch(
      `https://api.spotify.com/v1/search?q=${this.input.value}&type=show&market=GB`,
      //`https://api.spotify.com/v1/shows?locale=sv_US`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + this.token },
      }
    );
    const data = await result.json();
    return data;
  }
}

let searchslider = new SearchSlider("searchbargenre", token);
// searchslider.updateGenreSearch1();

let currentImageIndex = 0;

document.getElementById("left").addEventListener("click", (ev) => {
  console.log("LEFTT");
  ev.preventDefault();

  currentImageIndex--;
  itemsElement.style.left = currentImageIndex * 160 + "px";
});

document.getElementById("right").addEventListener("click", (ev) => {
  console.log("RIGHT");
  ev.preventDefault();

  currentImageIndex++;
  itemsElement.style.left = currentImageIndex * 160 + "px";
});

var carClass = document.getElementsByClassName("carousel");
let buttonstyles = document.getElementsByClassName("buttonstest");
console.log(buttonstyles);
console.log(carClass[0].style.left);
let styleL = carClass[0].style.left;
toLeft = (t) => {
  console.log(carClass);

  console.log(t);
  var i;
  for (i = 0; i < carClass.length; i++) {
    carClass[i].style.left = t + styleL;
  }
  styleL = carClass[0].style.left;
  console.log("STYLE", styleL);
};

"strict mode";
// import github from "../assets/github.svg";
// import linkedin from "../assets/linkedin.svg";
// import mail from "../assets/mail.svg";
// import resume from "../assets/resume.svg";
// import smartphone from "../assets/smartphone.svg";

//font-test
let fontTest = () => {
  let sentence = "The quick brown fox jumped over the lazy dog.";
  let fonts = {
    Ubuntu: "Ubuntu, sans-serif",
    Raleway: "Raleway, sans-serif",
    Anton: "Anton, sans-serif",
    Sofia: "Sofia, cursive",
    Pacifico: "Pacifico, cursive"
  };

  let body = document.getElementsByTagName("body");

  for (let key in fonts) {
    let div = document.createElement("div");
    div.setAttribute("class", "font-test");
    div.style = `font-family:${fonts[key]}; font-size: 32px;`;
    div.innerHTML = sentence + ` -- ${[key]}`;
    body[0].appendChild(div);
  }
};
//puts buttons into navigation bar
let populateNav = () => {
  let nav = document.getElementById("navigation");

  let links = {
    GitHub: {
      url: "https://www.github.com/danieltichiyama",
      svg: "./assets/github.svg"
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/danieltichiyama",
      svg: "./assets/linkedin.svg"
    },
    Resume: { url: "", svg: "../assets/resume.svg" },
    Email: {
      url: "emailto: daniel.ichiyama@gmail.com",
      svg: "./assets/mail.svg"
    },
    Call: { url: "tel:+18087730442", svg: "./assets/smartphone.svg" }
  };

  for (let key in links) {
    let a = document.createElement("a");
    let img = document.createElement("img");

    a.className = "navigation_button";
    a.id = `nav_button_${key}`;
    a.target = "_blank";
    a.setAttribute("name", key);

    img.src = links[key].svg;
    img.alt = key;
    img.class = "nav_icon";
    a.appendChild(img);

    a.href = links[key].url;
    nav.appendChild(a);
  }
};
//changes the adjective at the end of the sentence every 3 seconds
let changeAdj = () => {
  let adjectives = ["simple", "neat", "clean", "nice", "interesting"];
  let count = 0;
  let span = document.getElementById("adjectives");

  return setInterval(() => {
    if (count >= adjectives.length) {
      count = 0;
    }
    span.innerHTML = adjectives[count];
    count++;
  }, 3000);
};

//global var for toggleNav function
let showNav = false;
//toggles the arrow up and down
let toggleArrow = () => {
  let tab = document.getElementById("navigation_tab");
  let arrow = document.createElement("div");

  if (showNav) {
    arrow.id = "arrow_down";
  } else {
    arrow.id = "arrow_up";
  }
  if (tab.hasChildNodes()) {
    let otherArrow = tab.childNodes[0];
    tab.replaceChild(arrow, otherArrow);
  } else {
    tab.appendChild(arrow);
  }
};

//toggles the navigation bar display from none to hidden;
let navDisplay = () => {
  let nav = document.getElementById("navigation");

  if (!showNav) {
    nav.style = "display: none";
    toggleArrow();
  } else {
    nav.style = "display: flex;";
    toggleArrow();
  }
};

let toggleShowNav = () => {
  showNav = !showNav;
  return navDisplay();
};

let tab = document.getElementById("navigation_tab");
tab.onclick = toggleShowNav;

populateNav();
changeAdj();
navDisplay();

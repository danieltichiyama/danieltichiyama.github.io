"strict mode";
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

  let buttons = {
    gitHub: { url: "github.com/danieltichiyama", icon: "" },
    linkedIn: { url: "linkedin.com/in/danieltichiyama", icon: "" },
    resume: { url: "", icon: "" },
    email: { url: "emailto: daniel.ichiyama@gmail.com", icon: "" },
    phone: { url: "tel:+18087730442" }
  };

  for (let key in buttons) {
    let button = document.createElement("button");
    button.className = "navigation_button";
    button.id = `nav_button_${key}`;
    button.innerHTML = key;
    button.addEventListener("click", () => {
      window.history.push(buttons[key].url);
    });
    nav.appendChild(button);
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

populateNav();
changeAdj();
navDisplay();

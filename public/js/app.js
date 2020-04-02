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

console.log(window);

populateNav();

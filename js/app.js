"strict mode";

//puts buttons into navigation bar
let populateNav = () => {
  let nav = document.getElementById("navigation");

  let links = {
    GitHub: {
      url: "https://www.github.com/danieltichiyama",
      svg: `<svg enable-background="new 0 0 24 24" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" opacity=".6"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121"/></svg>`
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/danieltichiyama",
      svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="36" width="36" viewBox="0 0 504.4 504.4" style="enable-background:new 0 0 504.4 504.4;" xml:space="preserve" opacity=".5"><path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"/>
   </svg>`
    },
    Resume: {
      url: "./assets/Daniel_Ichiyama_Resume.pdf",
      svg: `<svg id="Layer_1" enable-background="new 0 0 496.016 496.016" height="36" viewBox="0 0 496.016 496.016" width="36" xmlns="http://www.w3.org/2000/svg" opacity=".5"><path d="m173.028 366h-98c-14.011 0-21.531 17.086-11.31 27.31l98 98c10.08 10.077 27.31 2.887 27.31-11.31v-98c0-8.84-716-16-16-16zm216-366h-282c-26.51 0-48 21.49-48 48v288.47c0 8.86 7.2 16.03 16.07 16 14.72-.06 44.83.03 108.1.03 10.68 0 19.33 8.65 19.33 19.33 0 63.28.09 93.38.03 108.1-.03 8.87 7.14 16.07 16 16.07h170.47c26.51 0 48-21.49 48-48v-400c0-26.51-21.49-48-48-48zm-141.66 50.37c29.7 0 53.86 24.16 53.86 53.86 0 29.69-24.16 53.85-53.86 53.85-29.69 0-53.85-24.16-53.85-53.85 0-29.7 24.16-53.86 53.85-53.86zm-81.01 164.14c0-13.83 8.16-26.42 20.79-32.06 27.895-12.453 27.474-12.72 31.9-12.72h56.28c4.503 0 4.318.402 31.9 12.72 12.64 5.64 20.8 18.23 20.8 32.06v21.94c0 8.84-7.16 16-16 16h-129.67c-8.84 0-16-7.16-16-16zm171.67 206.49h-93c-8.84 0-16-7.16-16-16s7.16-16 16-16h93c8.84 0 16 7.16 16 16s-7.16 16-16 16zm0-92h-181c-8.84 0-16-7.16-16-16s7.16-16 16-16h181c8.84 0 16 7.16 16 16s-7.16 16-16 16z"/></svg>`
    },
    Email: {
      url: "mailto:daniel.ichiyama@gmail.com",
      svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="36" width="36" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" opacity=".5"><path d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"/><path d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333v-268.25C512,132.927,509.583,129.146,505.813,127.406z"/></svg>`
    },
    Call: {
      url: "tel:+18087730442",
      svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="36" width="36"viewBox="0 0 503.604 503.604" style="enable-background:new 0 0 503.604 503.604;" xml:space="preserve" opacity=".5"><path d="M337.324,0H167.192c-28.924,0-53.5,23.584-53.5,52.5v398.664c0,28.916,24.056,52.44,52.98,52.44l170.412-0.184c28.92,0,52.58-23.528,52.58-52.448l0.248-398.5C389.908,23.452,366.364,0,337.324,0z M227.68,31.476h49.36c4.336,0,7.868,3.52,7.868,7.868c0,4.348-3.532,7.868-7.868,7.868h-49.36c-4.348,0-7.868-3.52-7.868-7.868C219.812,34.996,223.332,31.476,227.68,31.476z M198.02,33.98c2.916-2.912,8.224-2.952,11.136,0c1.46,1.456,2.324,3.5,2.324,5.588c0,2.048-0.864,4.088-2.324,5.548c-1.452,1.46-3.504,2.32-5.548,2.32c-2.084,0-4.088-0.86-5.588-2.32c-1.452-1.456-2.28-3.5-2.28-5.548C195.736,37.48,196.568,35.436,198.02,33.98z M250.772,488.008c-12.984,0-23.544-10.568-23.544-23.548c0-12.984,10.56-23.548,23.544-23.548s23.544,10.564,23.544,23.548C274.316,477.44,263.752,488.008,250.772,488.008z M365.488,424.908H141.232V74.756h224.256V424.908z"/></svg>`
    }
  };

  for (let key in links) {
    let a = document.createElement("a");
    a.className = "navigation_button";
    a.id = `nav_button_${key}`;
    a.innerHTML = links[key].svg;

    a.href = links[key].url;
    a.onfocus = () => {
      a.innerHTML = key;
    };
    a.onblur = () => {
      a.innerHTML = links[key].svg;
    };

    a.addEventListener("mouseover", () => {
      a.innerHTML = key;
    });
    a.addEventListener("mouseout", () => {
      a.innerHTML = links[key].svg;
    });

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

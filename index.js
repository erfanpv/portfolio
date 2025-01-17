let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidebar = document.getElementById("sidemenu");

function openmenu() {
  sidebar.style.right = "0";
}

function closemenu() {
  sidebar.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyxJfo7WuVYs2M7YAd5-JOaxSJnXmjMscFTVH_qqy2ueQp1iXWJ71ueHPK7IUe33AKFMg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

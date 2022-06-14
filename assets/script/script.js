// ---Emailkode start---
/* Følgende er en popup, der takker brugeren for tilmelding af email (subscription) */
function emailTak() {
  alert("Tak for din tilmelding");
}
// ---Emailkode slut---





// ---DropdownMenu start---

// For everey click in the HTML, call showdropdown
const Page = document.querySelector("[data-html]");
Page.addEventListener("click", showDropdown);


function showDropdown(e) {
  let currentDropdown;
  let hasClickedInnerDropdown = false;

  if (e.target.matches("[data-dropdown-button]")) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");

    // remove inner dropdown menus active class.
    document.querySelector("[data-dropdown2]").classList.remove("active");
  }

  if (e.target.matches("[data-dropdown-button2]")) {
    let innerDropdown = e.target.closest("[data-dropdown2]");
    innerDropdown.classList.toggle("active");
    hasClickedInnerDropdown = true;
  }

  if (hasClickedInnerDropdown === false) hideDropdown(currentDropdown);
}

function hideDropdown(currentDropdown) {
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
}

// ---DropdownMenu slut---




/* Tilbage til toppen knap start */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* Tilbage til toppen knap slut */
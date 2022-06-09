// ---Emailkode start---
/* Følgende er en popup, der takker brugeren for tilmelding af email (subscription) */
function emailTak() {
  alert("Tak for din tilmelding");
}
// ---Emailkode slut---

// ---DropdownMenu start---
// Lytter efter klik på dropdownMenu i dokumentet, og lytter efter om der klikkes inden i eller, uden for en dropdownMenu
// document.addEventListener('click', e => {
//   const isDropdownButton = e.target.matches("[data-dropdown-button]")
//   if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
//   return

//   let currentDropdown

//   if (isDropdownButton) {
//   currentDropdown = e.target.closest('[data-dropdown]')
//   currentDropdown.classList.toggle('active')
//   }

//   // Lukker andre dropdownMenuer som der ikke klikkes på
//   document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//     if (dropdown === currentDropdown)

//     return

//     dropdown.classList.remove('active')
//   })
// })

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

// const searchHtml = document.querySelector("[data-html]")
// searchHtml.addEventListener('click', showDropdown);

// function showDropdown (e) {
//   let currentDropdown;
//   let hideDropdownBool = true
//     if (e.target.matches("[data-dropdown-button]"))
//       currentDropdown = toggleActiveDropdown(e, "[data-dropdown]");
//     else if (e.target.matches('[data-dropdown-button2]')) {
//       toggleActiveDropdown(e, "[data-dropdown2]");
//       hideDropdownBool = false;
//     }
//     else return

//     if (hideDropdownBool === true)
//       hideDropdown(e.target.closest("[data-dropdown]"));
// }

// function toggleActiveDropdown (e, dropdown) {
//   let currentDropdown = e.target.closest(dropdown)
//   currentDropdown.classList.toggle('active')
//   return currentDropdown;
// }

// // hides selected dropdown by removing the active property from classlist.
// function hideDropdown (currentDropdown) {
//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//       if (dropdown === currentDropdown)
//       return

//       dropdown.classList.remove('active')
//     })
// }

// ---DropdownMenu slut---

// ---acc start---
var acc = document.getElementsByClassName("accordion");
var i;

// Gør det muligt at skifte imellem active og ikke active, så den kan folde sig ud, og folde sig sammen igen
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Tilbage til toppen knap */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

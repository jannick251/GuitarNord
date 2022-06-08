
// ---Emailkode start---
/* Følgende er en popup, der takker brugeren for tilmelding af email (subscription) */
function emailTak() {
    alert("Tak for din tilmelding");
}
// ---Emailkode slut---



// ---DropdownMenu start---
// Lytter efter klik på dropdownMenu i dokumentet, klikker vi inden i eller uden for en dropdownMenu
document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
  return

  let currentDropdown

  if (isDropdownButton) {
  currentDropdown = e.target.closest('[data-dropdown]')
  currentDropdown.classList.toggle('active')
  }

  // Lukker andre dropdownMenuer som der ikke klikkes på
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) 

    return
    
    dropdown.classList.remove('active')
  })
})
// ---DropdownMenu slut---






/* Tilbage til toppen knap */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




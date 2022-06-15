/* Følgende åbner og lukker sektioner på FAQ siden 
   Dette er udarbejdet ved hjælp af w3schools.com via:
   https://www.w3schools.com/howto/howto_js_accordion.asp 
*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


/* Tilbage til toppen knap */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

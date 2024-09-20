// -----------------about tab links -------------------

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName)

{
    for (const tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    for (const tabcontent  of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
        event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
  
}

//     media query side menu bar

let sidemenu=document.getElementById("sidemenu");

function openMenu()
{
    sidemenu.style.right="0";
}
function closeMenu(){
    sidemenu.style.right="-200px";
}

//     form to google sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbxlCpQZQ5m6Df7-ZHdJZ43WEjK3uvfrWDbtP5HgKtGAyorFojC-plS0gZuCZemxTLhz/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg =document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Message sent successffully";
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
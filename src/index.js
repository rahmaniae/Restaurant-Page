import showHome from "./Home";
import showMenu from "./Menu";
import showContact from "./Contact";
import './style.css'


const homeBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')
const contactBtn = document.querySelector('#contact');

const pages = [homeBtn, menuBtn, contactBtn];

homeBtn.addEventListener('click', showHome)
menuBtn.addEventListener('click', showMenu)
contactBtn.addEventListener('click', showContact);

showHome();
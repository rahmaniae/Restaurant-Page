import homePic from './home-pic.jpg'

export default function createContent () {

    const container = document.querySelector('#content')
    const title = document.createElement('h1');
    const Img = new Image();
    const message = document.createElement('p')

    container.innerHTML = ""
    title.textContent = "Welcome to our beautiful restaurant !";
    Img.src = homePic;
    Img.width = "400";
    Img.height = "400";
    message.textContent = "Hi, welcome our visitors to this fancy restaurant ! This is a very-known restaurant in the middle-east, we serve sea-food and a variety of food"

    const elements = [title, Img, message];
    elements.forEach(e => container.appendChild(e))
}
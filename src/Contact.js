export default function showContact () {
    const container = document.querySelector('#content')
    const div = document.createElement('div')
    const name = document.createElement('h2')
    const phone = document.createElement('div')
    const address = document.createElement('div')

    div.setAttribute('id','contact')
    name.textContent = "Fancy Restaurant"
    phone.textContent = "0550550055"
    address.textContent = "45 wall-street W01-POA Florida, USA"

    const elements = [name, phone, address];

    elements.forEach((element) => div.appendChild(element));
    container.innerHTML = "";
    container.appendChild(div)
}
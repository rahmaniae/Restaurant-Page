export default function showMenu () {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    const container = document.createElement('div')
    container.classList.add('menu')

    const meals = [
        {
            name: "Meal #1",
            description: "This meal contains a variety of nutriments",
            price: "4$",
        },
        {
            name: "Meal #2",
            description: "Bffff ffffffff fffffffff fffffff ffffff fffffff fffffff ffffffff fffff la Bla! A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
            price: "4$",
        },
        {
            name: "Meal #3",
            description: "Bla Bla ! This meal contains a variety of nutriments",
            price: "4$",
        },
        {
            name: "Meal #4",
            description: "This meal contains a variety of nutriments",
            price: "4$",
        }
    ];
    meals.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add('card');

        for (const key of Object.keys(element)) {
            const innerDiv = document.createElement('div');
            innerDiv.textContent = element[key];
            innerDiv.classList.add(key);
            div.appendChild(innerDiv);
        }
        container.appendChild(div);
    });

    content.appendChild(container);

    


}
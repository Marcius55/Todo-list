document.getElementById("main-button").addEventListener('click', mainButtonClicked);

function mainButtonClicked() {
    let text = document.getElementById("main-input").value;
    
    // creating a container
    const container = document.createElement('div');

    // Create text
    let h2 = document.createElement('h2');
    h2.innerHTML = text;

    // creating delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    const markButton = document.createElement('input');
    markButton.type = 'checkbox';
    markButton.classList.add('mark-checkbox');

    // add click event to delete button
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
        container.remove(); // remove only this container
    });

    markButton.classList.add('mark-btn')
    markButton.addEventListener('click', function() {
        h2.classList.toggle("toggled");
    })

    // add text and button to container
container.appendChild(h2);
container.appendChild(deleteButton);
container.appendChild(markButton);

document.getElementById("main-header").appendChild(container);
container.classList.add('item-container');
}



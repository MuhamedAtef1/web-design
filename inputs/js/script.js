let form = document.querySelector('#loginForm');
let divsContainer = document.getElementById('divsContainer');
let users = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let user = {
        name: e.target[0].value,
        email: e.target[1].value
    };
    
    users.push(user);
    showUser();
    form.reset();
});

let showUser = () => {
    divsContainer.innerHTML = "";
    users.forEach((item) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add('alert', "alert-primary", "mt-3");
        
        let newH2 = document.createElement('h2');
        newH2.innerText = `Name : ${item.name}`;
        
        let newH3 = document.createElement('h3');
        newH3.innerText = `Email : ${item.email}`;
        
        let remButton = document.createElement('button');
        remButton.classList.add('btn', 'btn-danger', 'me-2');
        remButton.textContent = "Remove User";
        remButton.addEventListener('click', () => {
            let i = users.findIndex((x) => x.name == item.name);
            users.splice(i, 1);
            showUser();
        });
        
        let editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-success');
        editButton.textContent = "Edit User";
        editButton.addEventListener('click', () => {
            item.name = prompt("enter the new name", item.name);
            item.email = prompt("enter the new email", item.email);
            showUser();
        });

        newDiv.appendChild(newH2);
        newDiv.appendChild(newH3);
        newDiv.appendChild(remButton);
        newDiv.appendChild(editButton);
        divsContainer.appendChild(newDiv);
    });
};
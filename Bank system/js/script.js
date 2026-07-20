let users = [
    {
        id: 101,
        name: "Sara",
        balance: 50000
    },
    {
        id: 102,
        name: "Nouran",
        balance: 75000
    },
    {
        id: 103,
        name: "Tamer",
        balance: 30000
    }
];
function add() {
    let addedId = Number(prompt("enter id of added customer"))
    let i = users.findIndex((item) => item.id == addedId)
    if (i == -1) {
        let addedName = prompt("enter name of added customer")
        let addedBalance = Number(prompt("enter balance of added customer"))
        users[users.length] = { id: addedId, name: addedName, balance: addedBalance }
    }
    else {
        console.log(`the custmor ${addedId} already have an account`)
    }
}
add()

function edit() {
    let editId = Number(prompt("enter id of customer to edit"))
    let newBalance = Number(prompt("enter new balance"))
    let i = users.findIndex((item) => item.id == editId)
    users[i].balance = newBalance
}

edit()

function transfer(){
    let fromID = Number(prompt("enter the id of the sender"))
    let toID = Number(prompt("enter the id of the reciver"))
    let Balance = Number(prompt("enter the balance"))
    let i1 = users.findIndex((item) => item.id == fromID)
    let i2 = users.findIndex((item) => item.id == toID)
    users[i1].balance -= Balance
    users[i2].balance += Balance
}

transfer()

function remove(){
    let deleteId = Number(prompt("enter id of customer to delete"))
    let i = users.findIndex((item) => item.id == deleteId)
    users.splice(i,1)
}

remove()
console.table(users)
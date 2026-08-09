const totalItems = document.querySelector("#totalItems")
const lostItems = document.querySelector("#lostItems")
const foundItems = document.querySelector("#foundItems")

let allItems = JSON.parse(localStorage.getItem("item")) || []

let totalItemCount = allItems.length
let lostitemCount = allItems.filter((item) => item.itemType == "Lost").length
let founditemCount = allItems.filter((item) => item.itemType == "Found").length

// totalItems.innerHTML += totalItemCount
// lostItems.innerHTML += lostitemCount
// foundItems.innerHTML += founditemCount
displayCount()
function displayCount () {
    totalItems.innerHTML = `Total Items -> ${totalItemCount}`
    lostItems.innerHTML = `Lost Items -> ${lostitemCount}`
    foundItems.innerHTML = `Found Items -> ${founditemCount}`
}

const allCardsContainer = document.querySelector(".allCards")

const length = allItems.length
if(length > 3){
    displayCard2()
} else {
    displayCard(allItems)
}
function displayCard (arr) {
    arr.forEach(item => {
    
    const card = document.createElement('div')
    card.classList.add("cards")
    card.innerHTML += `
            <h3 id="status">Itemtype - ${item.itemType}</h3>
            <p id="name">Itemname - ${item.itemName}</p>
            <p id="location">${item.itemType} at -> ${item.place}</p>
            <p id="contact">Contact No -> ${item.contact}</p>
            <p id="date">Date -> ${item.date}</p>
            <p id="itemDescription">Description -> ${item.itemDescription}</p>
            <p id="category">Category -> ${item.category}</p>
        `
        allCardsContainer.appendChild(card)

    });
}

function displayCard2 () {
    for (let i = 0; i < 3; i++) {
        const card = document.createElement('div')
        card.classList.add("cards")
        card.innerHTML += `
            <h3 id="status">Itemtype - ${allItems[i].itemType}</h3>
            <p id="name">Itemname - ${allItems[i].itemName}</p>
            <p id="location">${allItems[i].itemType} at -> ${allItems[i].place}</p>
            <p id="contact">Contact No -> ${allItems[i].contact}</p>
            <p id="date">Date -> ${allItems[i].date}</p>
            <p id="itemDescription">Description -> ${allItems[i].itemDescription}</p>
            <p id="category">Category -> ${allItems[i].category}</p>
        `
        allCardsContainer.appendChild(card)
    }
}
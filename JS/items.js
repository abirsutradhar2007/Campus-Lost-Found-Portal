let allItems = JSON.parse(localStorage.getItem("item")) || []

const allCardsContainer = document.querySelector(".allCards")
displayCard(allItems)
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
            <button id="deleteCard" onclick="deleteCard(${item.id})">Delete</button>
        `
        allCardsContainer.appendChild(card)

    });
}

function deleteCard (id) {
    allItems = allItems.filter((item) => item.id != id)
    localStorage.setItem("item", JSON.stringify(allItems))
    allCardsContainer.innerHTML = ""
    displayCard(allItems)
}

// const searchItem = document.querySelector("#searchItem")

// searchItem.addEventListener("input", () => {
//     const keyword = searchItem.value.trim().toLowerCase()
//     console.log(keyword)
//     const searchedItems = allItems.filter((item) => item.itemName.toLowerCase().includes(keyword))
//     allCardsContainer.innerHTML = ""
//     displayCard(searchedItems)
// })

// const category = document.querySelector("#category")
// category.addEventListener("change", () => {
//     const selectedCategory = category.value;

//     // console.log("Selected:", selectedCategory);
//     // console.log("All items:", allItems);

//     // allItems.forEach(item => {
//     //     console.log("Item category:", item.category);
//     // });
//     if(selectedCategory == "all"){
//         allCardsContainer.innerHTML = "";
//         displayCard(allItems);
//         return;
//     }
//     const filteredItems = allItems.filter((item) =>
//         item.category.toLowerCase() === selectedCategory.toLowerCase()
//     );

//     // console.log("Filtered:", filteredItems);

//     allCardsContainer.innerHTML = "";
//     displayCard(filteredItems);
// });

// const itemType = document.querySelector("#sortBy")

// itemType.addEventListener("change", () => {
//     const type = itemType.value;
//     if(type == "all"){
//         allCardsContainer.innerHTML = "";
//         displayCard(allItems);
//         return;
//     }
//     const filteredItems = allItems.filter((item) =>
//         item.itemType.toLowerCase() === type.toLowerCase()
//     );
//     allCardsContainer.innerHTML = "";
//     displayCard(filteredItems);
    
// })

//apply all filters at once


const searchItem = document.querySelector("#searchItem");
const category = document.querySelector("#category");
const itemType = document.querySelector("#sortBy");

function filterItems() {
    const keyword = searchItem.value.trim().toLowerCase();
    const selectedCategory = category.value.trim().toLowerCase();
    const selectedType = itemType.value.trim().toLowerCase();

    const filteredItems = allItems.filter((item) => {

        // Safely get values from item
        const itemName = String(item.itemName || "").toLowerCase();
        const itemCategory = String(item.category || "").toLowerCase();
        const itemTypeValue = String(item.itemType || "").toLowerCase();

        // Search filter
        const matchesSearch = itemName.includes(keyword);

        // Category filter
        const matchesCategory =
            selectedCategory === "" ||
            selectedCategory === "all" ||
            itemCategory === selectedCategory;

        // Item type filter
        const matchesType =
            selectedType === "" ||
            selectedType === "all" ||
            itemTypeValue === selectedType;

        // Item must match ALL filters
        return matchesSearch && matchesCategory && matchesType;
    });

    // Clear old cards
    allCardsContainer.innerHTML = "";

    // Display filtered cards
    displayCard(filteredItems);
}


// Search
searchItem.addEventListener("input", filterItems);

// Category
category.addEventListener("change", filterItems);

// Item Type
itemType.addEventListener("change", filterItems);



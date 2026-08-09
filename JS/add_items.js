const itemName = document.querySelector("#itemName")
const category = document.querySelector("#category")
const itemDescription = document.querySelector("#itemDescription")
const place = document.querySelector("#location")
const date = document.querySelector("#date")
const contact = document.querySelector("#contact")
const form = document.querySelector("form")
const submitBtn = document.querySelector("#submit")

let allItems = JSON.parse(localStorage.getItem("item")) || []

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const itemType = document.querySelector('input[name="itemType"]:checked')
    // if(itemName.value == "" || category.value == "" || itemDescription.value == "" || place.value == "" || date.value == "" || contact.value == ""){
    //     alert("You should fill all the details")
    //     return;
    // }
    // if(!itemType){
    //     alert("You should fill the Item Type")
    //     return;
    // }
    let item = {
        id : Date.now(),
        itemName : itemName.value,
        category: category.value,
        itemType: document.querySelector('input[name="itemType"]:checked')?.value,
        itemDescription: itemDescription.value,
        place: place.value,
        date: date.value,
        contact: contact.value
    }
    console.log(item)
    allItems.unshift(item)
    localStorage.setItem("item", JSON.stringify(allItems))
    form.reset()
})





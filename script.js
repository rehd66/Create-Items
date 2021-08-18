let pInput = document.querySelector("#plant-input")
let saveBtn = document.querySelector(".block")
let display = document.querySelector("#display")
let container = document.querySelector(".container")
let unList = document.querySelector("#list")
let savedPlants = [
  
]

saveBtn.addEventListener("click", save)

function save() {
  display.textContent = "Last Entry: " + pInput.value
  
  if (pInput.value != "") {
    savedPlants.push(pInput.value)
    let newLi = document.createElement("li")
    newLi.classList.add("new-list")
    let listText = document.createTextNode(pInput.value)
    console.log(savedPlants)
    
    newLi.appendChild(listText)
    unList.appendChild(newLi)
    newLi.addEventListener("click", function() {
      newLi.style.background = "lightblue"
    })
    newLi.addEventListener("dblclick", function() {
      unList.removeChild(newLi)
    })
    pInput.value = ""
  } 
    else {
      display.textContent = "Please input plant name.."
    } // end if statement
} //end save() function


// Get references to the text box and button elements
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");

// Get reference to the unordered list element
const list = document.getElementById("list");

// Function to add a new list item
function addItem() {
  // Get the value from the text box
  const newItem = itemInput.value;

  // Create a new list item element
  const li = document.createElement("li");
  li.textContent = newItem;

  // Append the new list item to the unordered list
  list.appendChild(li);

  // Clear the text box
  itemInput.value = "";
}

// Attach click event listener to the button
addButton.addEventListener("click", addItem);

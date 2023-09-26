const input = document.querySelector("#fruit");
const suggestions = document.querySelector("#suggestions-output");

const fruit = [
  "Apple 🍎",
  "Apricot",
  "Avocado 🥑",
  "Banana 🍌",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry🫐",
  "Boysenberry",
  "Currant",
  "Cherry 🍒",
  "Coconut 🥥",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape 🍇",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit 🥝",
  "Kumquat",
  "Lemon 🍋",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango 🥭",
  "Mangosteen",
  "Marionberry",
  "Melon 🍈",
  "Cantaloupe",
  "Honeydew",
  "Watermelon 🍐",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach 🍑",
  "Pear 🍐",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry 🥝",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  str = str.toLowerCase();
  return fruit.filter((fruit) => fruit.toLowerCase().includes(str));
}

function searchHandler(e) {
  const inputValue = e.target.value.trim();
  const results = search(inputValue);
  showSuggestions(results, inputValue);
}

function showSuggestions(results, inputValue) {
  suggestions.innerHTML = "";
  if (inputValue === "") {
    suggestions.style.display = "none";
    return;
  }

  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    suggestions.appendChild(li);
  });

  suggestions.style.display = "block";
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.style.display = "none";
  }
}

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);

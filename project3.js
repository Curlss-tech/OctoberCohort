// Function to convert all cards to an array
function getCardsArray() {
    return Array.from(document.querySelectorAll('.cards'));
}

// Function to check if the title includes the search text and adjust display
function filterCards(cards, searchText) {
    let foundMatch = false;

    cards.forEach(function(card) {
        let title = card.querySelector('h1').innerText.toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = '';
            foundMatch = true;
        } else {
            card.style.display = 'none';
        }
    });

    return foundMatch;
}

// Function to show all cards
function showAllCards(cards) {
    cards.forEach(card => card.style.display = '');
}

// Function to handle the search when button is clicked
function handleSearch(searchInput) {
    let searchText = searchInput.value.toLowerCase();
    let cards = getCardsArray();
    let foundMatch = filterCards(cards, searchText);

    if (!foundMatch) {
        showAllCards(cards);
        alert('Not in the list');
    }
}

// i have struggled to do this event listener bit so i have used a bit of help from google/a friend of mine, ill try to get your help regarding it when i'm done with the react project//

// Wait until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    // find the elements on the page
    let searchButton = document.querySelector('#btn');
    let searchInput = document.querySelector('input[type="search"]');

    
    searchButton.addEventListener('click', function() {
        handleSearch(searchInput);
    });
});

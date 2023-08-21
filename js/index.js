// function checkFirstCard() {
//     const firstCard = document.getElementById('first-card-tk');
//     const firstCardValue = firstCard.innerText;
//     console.log(firstCardValue);
// }

// function checkFirstCard() {
//     const card1Accessories = getCardTitle('card1-accessories');
//     console.log(card1Accessories);
// }

// function getCardTitle(textId) {
//     const titleText = document.getElementById(textId);
//     const titleTextValue = titleText.innerText;
//     const title = parseFloat(titleTextValue);
//     return;
// }

function checkFirstCard(target) {
    // console.log(target.parentNode.childNodes[3].innerText);
    const balance = document.getElementById('balance');
    const itemName = target.parentNode.childNodes[3].innerText;
    // console.log(itemName);
    li.innerText = itemName;
    const li = document.createElement("li");
    console.log(li);
    // balance.appendChild(li);
 }
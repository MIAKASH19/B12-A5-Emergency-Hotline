let heartsNum = 0;
let copyCount = 0;
let callHistory = [];
let historyContainer = getElement(".history-container");
let heartCount = getElement("#heart-count");
let heartIcons = getAllElements(".heart-icon");
let callbuttons = getAllElements(".call-btn");
let coinAmount = getElementInnerTextNumber("#coin-amount");

// Function for get Element
function getElement(elem) {
  let element = document.querySelector(elem);
  return element;
}

// Function for Get Elements InnerText
function getElementInnerText(elem) {
  let elementInnerText = document.querySelector(elem).innerText;
  return elementInnerText;
}

// Function for Get All Elements
function getAllElements(elem) {
  let allElement = document.querySelectorAll(elem);
  return allElement;
}

// Function for Elements innerText into Number conversion
function getElementInnerTextNumber(elem) {
  let elementNumber = parseInt(document.querySelector(elem).innerText);
  return elementNumber;
}

for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    heartsNum++;
    heartCount.textContent = heartsNum;
  });
}

for (const callbtn of callbuttons) {
  callbtn.addEventListener("click", function (e) {
    if (coinAmount < 20) {
      alert("You do not have sufficient Balance");
      return;
    }
    let serviceName =
      e.target.parentNode.parentNode.querySelector("#service").innerText;
    let serviceNum =
      e.target.parentNode.parentNode.querySelector("#service-num").innerText;

    coinAmount -= 20;
    let coin = getElement("#coin-amount");
    coin.innerText = coinAmount;

    const data = {
      name: serviceName,
      number: serviceNum,
      time: new Date().toLocaleTimeString(),
    };
    alert(`Service Name : ${serviceName}\nService Number : ${serviceNum}`);

    callHistory.push(data);
    historyContainer.innerHTML = "";
    callHistoryGenerator();
  });
}

function callHistoryGenerator() {
  for (const data of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="history-card text-[15px] bg-gray-100 rounded-lg flex items-center justify-between p-3">
            <div class="w-fit">
              <h1 class="font-bold">${data.name}</h1>
            <p class="text-gray-500">${data.number}</p>
            </div>
            <p class="text-sm font-medium text-black w-fit">${data.time}</p>
          </div>`;
    historyContainer.appendChild(div);
  }
}

getElement(".clear-btn").addEventListener("click", function () {
  historyContainer.innerHTML = "";
  callHistory = [];
});

let copyButtons = getAllElements(".copy-btn");

for (const copyButton of copyButtons) {
  copyButton.addEventListener("click", function (e) {
    let Text =
      e.target.parentNode.parentNode.querySelector("#service-num").innerText;
    let copyCounter = getElement("#copy-counter");
    navigator.clipboard.writeText(Text);

    alert("Copied Successfully!!!");
    copyCount++;
    copyCounter.innerText = copyCount;
  });
}

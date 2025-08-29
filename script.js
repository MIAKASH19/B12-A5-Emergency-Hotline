// Function for get Element
function getElement(elem) {
  let element = document.querySelector(elem);
  return element;
}
function getElementInnerText(elem) {
  let elementInnerText = document.querySelector(elem).innerText;
  return elementInnerText;
}
// Function for Elements innerText into Number conversion
function getElementInnerTextNumber(elem) {
  let elementNumber = parseInt(document.querySelector(elem).innerText);
  return elementNumber;
}

let historyContainer = document.querySelector(".history-container");
let heartCount = getElement("#heart-count");
let coinAmount = getElementInnerTextNumber("#coin-amount");
let heartsNum = 0;
let callHistory = [];

historyContainer.innerHTML = "";

document.querySelectorAll(".heart-icon").forEach((heart) => {
  heart.addEventListener("click", function () {
    heartsNum++;
    console.log(heartsNum);
    heartCount.textContent = heartsNum;
  });
});

document.querySelectorAll(".call-btn").forEach((callBtn) => {
  callBtn.addEventListener("click", function (e) {
    if (coinAmount < 20) {
      alert("You donot have sufficient Balance");
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

    callHistory.push(data);
    historyContainer.innerHTML = "";
    callHistoryGenerator();
    console.log(
      e.target.parentNode.parentNode.querySelector("#service").innerText
    );
  });
});

function callHistoryGenerator() {
  for (const data of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="history-card text-[14px] bg-gray-100 rounded-lg flex items-center justify-between p-3">
            <div class="w-fit">
              <h1 class=" font-bold">${data.name}</h1>
            <p class="text-gray-500">${data.number}</p>
            </div>
            <p class="text-sm text-black w-fit">${data.time}</p>
          </div>`;
    historyContainer.appendChild(div);
  }
}

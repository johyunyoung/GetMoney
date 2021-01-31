const clickWindow = document.querySelector(".click-window");
const myMoney = document.querySelector(".my-money");

let MONEY = 0;

function plusMoney() {
    MONEY += 1;
    myMoney.innerHTML = `My money: ${MONEY} 원`;
}

function init() {
    clickWindow.addEventListener("click", plusMoney);
}

init();
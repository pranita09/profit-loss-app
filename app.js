const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity,current){
    if(initial > current){
        const loss = (initial - current) * quantity;
        const lossPercent = (loss / initial) * 100;
        showOutput("Your loss is " + loss + " and lthe percent is " + lossPercent + "%");
    }else if(current > initial){
        const profit = (current - initial) * quantity;
        const profitPercent = (profit / initial) * 100;
        showOutput("your profit is " + profit + " and the percent is " + profitPercent + "%");
    }else{
        showOutput("No gain no pain and no pain no gain!");
    }
}

function submitHandler(){
    const ip = Number(initialPrice.value);
    const qty = Number(stocksQuantity.value);
    const cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, cp);
}

function showOutput(message){
    outputBox.innerText = message;
}

submitBtn.addEventListener("click", submitHandler);
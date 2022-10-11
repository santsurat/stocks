 let initialPrice = document.querySelector("#Initial-price");
 let quantityOfStocks = document.querySelector("#Stocks-Quantity");
 let currentPrice = document.querySelector("#Current-price");
 let clickbutton = document.querySelector("#clicked");
 let outputbox = document.querySelector("#output-box");
 

clickbutton.addEventListener("click" , clicked );

function clicked(){
var actual = Number(initialPrice.value)
var qty =  Number(quantityOfStocks.value)
var curr = Number(currentPrice.value)

 CalculateProfitAndLoss(actual,qty,curr);
}
//debugger;
function CalculateProfitAndLoss(initial,quantity,Current) {


   if(initial > Current){
      var loss = ( initial-Current) * quantity;
      var lossPercentage = (loss / initial) * 100;
      ShowOutput(`Hey the Loss is ${loss}and the Losspercentage is ${lossPercentage}%`);


        }else if(Current > initial){
         var profit = ( Current-initial  ) * quantity;
         var profitPercentage = (profit / initial) * 100;
   
        ShowOutput(`Hey the profit is ${profit}and the profitpercentage is ${profitPercentage}%`);
   
        }else{
           ShowOutput(`no pain no gain and no gain no pain`);
        }
};

function ShowOutput(message) {

    outputbox.innerHTML = message;
    outputbox.style.color = 'green';
    
}







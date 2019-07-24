var maxProfit = function(prices){
    let profit = 0;
    for (let i = 0; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit = profit + prices[i]- prices[i-1];
        }
    }
    return profit;
};

maxProfit([4,2,6,4,8,22,55,2,9])
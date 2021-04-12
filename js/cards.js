

//Hanggang dito na lang:(( 
var count = 0;
var msg = '';
function countCard(cards) {
    
    switch(cards){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 7:
      case 8:
      case 9:
        count = count;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }

    if (count === 5) msg = "5 Bet";
    else if (count === 0) msg = "0 Hold";
    else if (count === -5) msg = "-5 Hold";
    else if (count === -1) msg = "-1 Hold";
    else if (count === 1) msg = "1 Bet";
    return msg;

}
countCard(2); countCard(3); countCard(4); countCard(5); countCard(6); 
console.log(msg);

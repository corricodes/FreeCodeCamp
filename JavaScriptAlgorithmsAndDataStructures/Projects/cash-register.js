// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

const checkCashRegister = (price, cash, cid) => {
    const UNIT_AMOUNT = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
    let totalCID = 0;
    for (let element of cid) {
      totalCID += element[1];
    }
    totalCID = totalCID.toFixed(2);
    let changeOut = cash - price;
    const changeArray = [];
    if (changeOut > totalCID) {
      return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } else if (changeOut.toFixed(2) === totalCID) {
      return { status: "CLOSED", change: cid };
    } else {
      cid = cid.reverse();
      for (let elem of cid) {
        let temp = [elem[0], 0];
        while (changeOut >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
          temp[1] += UNIT_AMOUNT[elem[0]];
          elem[1] -= UNIT_AMOUNT[elem[0]];
          changeOut -= UNIT_AMOUNT[elem[0]];
          changeOut = changeOut.toFixed(2);
        }
        if (temp[1] > 0) {
          changeArray.push(temp);
        }
      }
    }
    if (changeOut > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArray};
  }
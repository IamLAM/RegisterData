function checkCashRegister(price, cash, cid) {
    var change;
    let box = 0;
    let dev = 0;
    // Here is your change, ma'am.

    for (var c in cid) {
        box += cid[c][1];
        console.log(cid[c][1]);
    }
    // console.log(box);}
    dev = cash - price;
    if (price < cash) {
        if (dev > box) {
            // return {status: "INSUFFICIENT_FUNDS", change: []};
            console.log("INSUFFICIENT_FUNDS");
        } else if (dev == box) {
            return { status: "CLOSED", change: cid };
        }


    } else {
        console.log("Sorry you need more money");
    }
    console.log("Change: " + dev + " Funds:" + box);



    return change;
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 2000, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
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
        } else {
            let i = 0;
            //while (dev <= 0) {

            if (cid[8][1] >= dev) {
                console.log(dev + " is less than One hundread " + cid[8][1]);
            }
            if (cid[7][1] >= dev) {
                console.log("is less than Twenty dollars");
            }
            if (cid[6][1] >= dev) {
                console.log("is less than Ten dollars");
            }
            if (cid[5][1] >= dev) {
                console.log("is smaller than Five dollars ");
            }
            if (cid[4][1] >= dev) {
                console.log("is less than a Dollar");
            }
            if (cid[3][1] >= dev) {
                console.log("is less than Quarter ");
            }
            if (cid[2][1] >= dev) {
                console.log("is less than Dime");
            }
            if (cid[1][1] >= dev) {
                console.log("is less than Nickel");
            }
            if (cid[0][1] >= dev) {
                console.log("is less than Penny");
            }
            //}

        }


    } else if (dev == box) {
        // return { status: "CLOSED", change: cid };
        console.log("CLOSED");
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

checkCashRegister(19.5, 20, [
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
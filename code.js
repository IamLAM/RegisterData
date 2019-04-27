function checkCashRegister(price, cash, cid) {
    var change = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ];

    const amount = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

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
        if (dev == box) {
            // return { status: "CLOSED", change: cid };
            console.log("CLOSED");
        } else if (dev > box || box < cash) {
            // return {status: "INSUFFICIENT_FUNDS", change: []};
            console.log("INSUFFICIENT_FUNDS");
        } else {
            let i = 0;
            //while (dev <= 0) {

            while (amount[8][1] <= dev && cid[8][1] >= amount[8][1]) {
                console.log(dev + " is less than One hundread " + cid[8][1]);
                change[8][1] += 100;
                cid[8][1] -= 100;
                dev -= 100;
            }
            while (amount[7][1] <= dev && cid[7][1] >= amount[7][1]) {
                console.log("is less than Twenty dollars");
                change[7][1] += 20;
                cid[7][1] -= 20;
                dev -= 20;
            }
            while (amount[6][1] <= dev && cid[6][1] >= amount[6][1]) {
                console.log("is less than Ten dollars");
                change[6][1] += 10;
                cid[6][1] -= 10;
                dev -= 10;
            }
            while (amount[5][1] <= dev && cid[5][1] >= amount[5][1]) {
                console.log("is smaller than Five dollars ");
                change[5][1] += 5;
                cid[5][1] -= 5;
                dev -= 5;
            }
            while (amount[4][1] <= dev && cid[4][1] >= amount[4][1]) {
                console.log("is less than a Dollar");
                change[4][1] += 1;
                cid[4][1] -= 1;
                dev -= 1;
            }
            while (amount[3][1] <= dev && cid[3][1] >= amount[3][1]) {
                console.log("is less than Quarter ");
                change[3][1] += 0.25;
                cid[3][1] -= 0.25;
                dev -= 0.25;
            }
            while (amount[2][1] <= dev && cid[2][1] >= amount[2][1]) {
                console.log("is less than Dime");
                change[2][1] += 0.1;
                cid[2][1] -= 0.1;
                dev -= 0.1;
            }
            while (amount[1][1] <= dev && cid[1][1] >= amount[1][1]) {
                console.log("is less than Nickel");
                change[1][1] += 0.05;
                cid[1][1] -= 0.05;
                dev -= 0.05;
            }
            while (amount[0][1] <= dev && cid[0][1] >= amount[0][1]) {
                console.log("is less than Penny");
                change[0][1] += 0.01;
                cid[0][1] -= 0.01;
                dev -= 0.01;
            }

            //}
            console.log(change);

        }


    } else {
        console.log("Sorry you need more money");
    }
    console.log("Change: " + dev + " Funds:" + box + "Cash: " + cash);



    return { status: "OPEN", change: change };
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

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));
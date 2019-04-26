function checkCashRegister(price, cash, cid) {
    var change;
    let box = 0;
    let dev = 0;
    // Here is your change, ma'am.

    for (var c in cid) {


        box += cid[c][1];
        // console.log(box);
        dev = price - cash;
        console.log(dev);
        console.log(cid[c][1]);
        console.log(box);

    }


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

/*

function truthCheck(collection, pre) {
    var counter = 0;

    for (var c in collection) {

        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
        console.log(collection[c].user);
    }


    // return counter == collection.length;
}


truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
*/
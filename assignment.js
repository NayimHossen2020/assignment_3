



/*...............................................................
 here is the first problem solve:- kilometerToMeter
 .................................................................*/


function kilometerToMeter(kilometer) {
    if (isNaN(kilometer) || kilometer < 0) {
        return "Invalid input, please try again";
    }
    // 1 km = 1000 meter
    var meter = kilometer * 1000;
    return meter;
}
var ismeter = kilometerToMeter(5.8);
console.log(ismeter);



/*...............................................................
 here is the second problem solve:- budgetCalculator
 .................................................................*/


function budgetCalculator(Watch, Phone, laptop) {
    var Quantity1 = Watch * 50;
    var Quantity2 = Phone * 100;
    var Quantity3 = laptop * 500;
    var total = Quantity1 + Quantity2 + Quantity3;
    return total;
}

var totalAmount = budgetCalculator(10, 3, 4);
console.log(totalAmount);


/*...............................................................
 here is the third problem solve:- hotelCost
 .................................................................*/


function hotelCost(days) {
    var everyDayCost = 0;
    if (days <= 10) {
        everyDayCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var secondTenDays = remainingDays * 80;
        var remainingDays = days - 10;
        everyDayCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var afterAlldays = remainingDays * 50;
        var everyDayCost = firstTenDays + secondTenDays + afterAlldays;
    }
    return everyDayCost;
}
var totalAmount = hotelCost(30);
console.log(totalAmount);



/*...............................................................
 here is the fourth problem solve:- megaFriend
 .................................................................*/


function megaFriend(friend) {
    var biggerName = friend[0];
    for (var i = 0; i < friend.length; i++) {
        if (biggerName.length < friend[i].length) {
            biggerName = friend[i];
        }
    }
    return biggerName;
}

myFriends = ["Shoriful islam", "Parves", "Shakib", "Johanker mahabub", "Hriday", "Nayim Hossen"];
var bigName = megaFriend(myFriends);
console.log(bigName);


/*...............................................................
here is the end of this assignment
 .................................................................*/

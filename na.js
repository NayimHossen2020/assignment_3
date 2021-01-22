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
function main(x) {
    var res = "";
    for (let i = x; i > 1; i--) {
        res += i + " bottles of beer on the wall," + i + " bottles of beer." + "\n" +
            "Take one down and pass it around," + (i - 1) + " bottles of beer on the wall." + "\n";
    }
    return res += 1 + " bottles of beer on the wall," + 1 + " bottles of beer." + "\n" + "Take one down and pass it around, no more bottles of beer on the wall." + "\n" +
        "No more bottles of beer on the wall, no more bottles of beer." + "\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.";
}

var result = main(99);
console.log(result);

// solution 1
function reverseString(str) {
    str = str.split("");
    str.reverse();
    str = str.join("");
    return str;
}

reverseString('hello');

// solution 2
/*function reverseString(str) {
    var i = 1;
    var len = str.length;
    var strFinal = "";

    while (i <= len) {
        strFinal += str.charAt(len - i);
        i++;
    }
    return strFinal;
}*/
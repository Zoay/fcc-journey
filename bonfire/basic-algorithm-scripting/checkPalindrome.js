function reverse(str) {
    str = str.split("");
    str.reverse();
    str = str.join("");

    return str;
}

function palindrome(str) {
    // Good luck!
    var regex = /[^\w+]/g;

    // solution 1: with reverse function
    str = str.toLowerCase().replace(regex, "");
    var newStr = reverse(str);
    return (newStr === str);

    // solution 2: without reverse function
}



palindrome("eye");
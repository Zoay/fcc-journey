function mutation(arr) {

    var first = arr[0].toLowerCase().split("");
    var second = arr[1].toLowerCase().split("");

    var idx = 0;

    for (var i = 0, len = second.length; i < len; i++) {
        var c = second[i];
        idx = first.indexOf(c);
        if (idx === -1) return false;
    }

    return true;
}

mutation(['hello', 'hey']);
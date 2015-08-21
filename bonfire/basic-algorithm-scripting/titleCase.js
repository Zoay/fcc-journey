function titleCase(str) {

    if (str.length === 0) return str;

    var resArray = [];
    var strArray = str.toLowerCase().split(/\s+/g);

    for (var i = 0, len = strArray.length; i < len; i++) {
        var strr = strArray[i];
        var res = strr.charAt(0).toUpperCase() + strr.substr(1);
        resArray.push(res);
    }

    return resArray.join(' ');
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
function destroyer(arr) {
    // Remove all the values
    // 
    if (arr.length === 0) return [];

    var args = Array.prototype.slice.call(arguments, 1);
    arr = arr.filter(function(val) {
        if (args.indexOf(val) === -1)
            return val;
    });
    return arr;
}

destroyer(['tree', 'hamburger', 53], 'tree', 53);
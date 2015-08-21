function slasher(arr, howMany) {
    // it doesn't always pay to be first
    if (arr.length < howMany) return [];
    if (howMany === 0) return arr;

    //var remain = arr.length % howMany;
    arr.splice(0, howMany);
    //arr = arr.slice(0, remain)

    return arr;
}

slasher([1, 2, 3], 2);
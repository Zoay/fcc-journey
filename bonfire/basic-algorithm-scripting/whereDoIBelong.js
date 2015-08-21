function where(arr, num) {
    // Find my place in this sorted array.
    if (arr.length === 0) return [];
    arr.push(num);
    arr.sort();

    return arr.indexOf(num);
}

where([40, 60], 50);
function chunk(arr, size) {
    // Break it up.
    if (arr.length === 0) return arr;
    if (arr.length < size) return arr;

    var i = 0;
    var count = 0;
    var len = arr.length;
    var subArray = [];
    var res = [];

    var remain = len % size;
    if (remain === 0) {
        while (i < len) {
            subArray.push(arr[i]);
            count++;

            if (count === size) {
                res.push(subArray);
                subArray = [];
                count = 0;
            }

            i++;
        }
    } else {
        res.push(arr.slice(0, size));
        res.push(arr.slice(size));
    }

    return res;
}

chunk([0, 1, 2, 3, 4, 5], 4);

//TODO
// review the algorithm of the chunck function
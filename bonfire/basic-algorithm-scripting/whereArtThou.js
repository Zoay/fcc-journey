function where(collection, source) {
    var arr = [];
    // What's in a name?

    var sourceKey = (Object.keys(source))[0];
    var i = 0;
    var len = collection.length;

    while (i < len) {

        var obj = collection[i];

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (prop === sourceKey) {
                    if (obj[prop] === source[sourceKey]) {
                        arr.push(obj);
                    }
                }
            }
        }

        i++;
    }
    return arr;
}

where([{
    first: 'Romeo',
    last: 'Montague'
}, {
    first: 'Mercutio',
    last: null
}, {
    first: 'Tybalt',
    last: 'Capulet'
}], {
    last: 'Capulet'
});
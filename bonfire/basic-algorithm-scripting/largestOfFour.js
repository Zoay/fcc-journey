/**
 * Created by joffrey on 17/08/15.
 */
var largestOfFour = function(arr) {
    var indexMax = 0;
    var maxVal = 0;

    for(var i = 0, len = arr.length; i<len; i++){
        var array = arr[i];
        for(var k = 0, length = array.length; k<length; k++){
            var val = array[k];

            if(maxVal < val) {
                maxVal = val;
                indexMax = i;
            }
        }
    }

    return arr[indexMax]
};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

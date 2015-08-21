/**
 * Created by joffrey on 17/08/15.
 */
function repeat(str, num) {
    if (num <= 0) return "";

    var index = 0;
    var res = "";
    while(index < num){
        res += str;
        index += 1;
    }
    return res;
}

repeat('abc', 3);
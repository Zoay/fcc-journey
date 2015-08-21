/**
 * Created by joffrey on 17/08/15.
 */
function truncate(str, num) {
    if (num >= str.length) return str;
    var newStr = str.slice(0, num - '...'.length);
    return newStr;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
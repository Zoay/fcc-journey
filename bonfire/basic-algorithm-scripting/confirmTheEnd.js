/**
 * Created by joffrey on 17/08/15.
 */
function end(str, target) {
    //Solution 1
    //var s = str.substring(str.length - target.length);
    //return (s === target)

    //Solution 2
    return (str.indexOf(target, str.length - target.length) !== -1);
}

end('Bastian', 'n');
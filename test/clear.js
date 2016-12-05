/**
 * Created by limx on 2016/12/5.
 */
var index = 0;
var task = setInterval(function () {
    index++;
    console.log(index);
    if (index > 5) {
        clearInterval(this);
        clearInterval(task);
    }
}, 1000);
task = null;
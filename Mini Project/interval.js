// var a = 0;
// setInterval(() => {
//     a = a+10;
//     console.log(a);
// }, 1000);



// x = 0;
// setInterval(Anime, 100);
// function Anime() {
//     x = x + 10;
//     var target = document.getElementById('test');
//     target.style.marginLeft = x + 'px';
// }



var x = 0;
var Setted = setInterval(Anime, 500);

function Anime() {
    x = x + 10;
    if (x == 160) {
        clearInterval(Setted);
    } else {
        var target = document.getElementById('test');
        target.style.marginLeft = x + 'px';

        var target_2 = document.getElementById('test_2');
        target_2.style.width = x + 'px';

        var target = document.getElementById('test_3');
        target.style.marginLeft = x + 'px';

        var target_2 = document.getElementById('test_4');
        target_2.style.width = x + 'px';
    }
}
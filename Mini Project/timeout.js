// var a = 0;
// setTimeout(() => {
//     a = a + 10;
//     console.log(a);
// }, 1500);

var Setted = setTimeout(Sizer, 2000);
function Sizer() {
    var target = document.getElementById('test_3');
    target.style.background = 'coral';
    target.style.width = '500px';
}


// function stopAnimation() {
//     clearTimeout(Setted);
//     alert('Stopped');
// }


// document.getElementById('test_3').addEventListener('click', Stopper);
document.getElementById('stopper').addEventListener('click', Stopper);

function Stopper() {
    clearTimeout(Setted);
    alert('Stopped');
}
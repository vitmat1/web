let btnRed = document.getElementById('btnRed');
console.dir(btnRed);
btnRed.onclick = function(){
    alert('на мена нажали правой кнопкой')
};
btnRed.onmousemove = function(){
    alert('на меня нажали много раз')
};
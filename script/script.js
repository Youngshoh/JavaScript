var btn = document.querySelector('.btn')
var text = document.querySelector('.text')

let a = parseInt(prompt('Yoshingiz nechida'));
if(a<0){
    alert("Siz hali tug'lmagansiz, tug'ilgach saytga qayta kiring")
}
else if(a>=1 && a<=18){
    alert("Hali yoshsiz o'qing!")
}
else if (a>18 && a<=60 ){
    alert("Siz Ishlashingiz!");
}
else if(a>60 && a<150){
    alert("Siz hozr trikmisz degan savolar bizni qiynamoqda");
}

else if(150>a){
    alert("Siz aniq o'lgan bo'ishingiz kerak");
}
else{
    alert("Sog' bolasiz siz bilan Shukrullo va Shohrux boldi")
}

btn.addEventListener('click', function () {
    document.querySelector('.text').innerHTML = "Siz bilan Shukrullo va Shohrux bo'ldi";
    text.style.color = 'red'
    text.style.fontSize = '30px'
})
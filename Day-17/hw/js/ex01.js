
//----------------variable bai1 -------------------
var btn1 = document.getElementById("btn1");

//----------------variable bai1 -------------------


//----------------variable bai2 -------------------
var btn2 = document.getElementById("btn2");
//----------------variable bai2 -------------------


//----------------variable bai3 -------------------
var btn3 = document.getElementById("btn3");
//----------------variable bai3 -------------------



//-----------------function b1------------------------
function swap(a, b){
    [a, b] = [b, a];
document.getElementById("resultA").innerHTML = `${a}`;
document.getElementById("resultB").innerHTML = `${b}`;
}

btn1.addEventListener("click", (event) => {
    event.preventDefault();
    var a1 = document.getElementById("inputA").value;
    var b1 = document.getElementById("inputB").value;
    swap(a1,b1);
});

//-----------------function b1------------------------

//-----------------function b2------------------------
function calc(){
    var s = 10 + 20 + (5 ^ 10) / 2;
    document.getElementById("result2").innerHTML = `${s}`;
}
btn2.addEventListener("click", (event) => {
    event.preventDefault();
    calc();
});
//-----------------function b2------------------------

//-----------------function b3------------------------
function max(a,b,c){
    var max = 0;
    if ( a > b){
        if(b > c){
            max = a;
        }else {
            if(a > c ){
                max = a;
            }else {
                max = c;
            }
        }
    }else {
        if ( b < c ){
            max = c;
        }else {
           max =b;
        }
    }
    return max;
}

btn3.addEventListener("click", (event) => {
event.preventDefault();
    var a2 = parseInt(document.getElementById("inputA2").value);
    var b2 = parseInt(document.getElementById("inputB2").value);
    var c2 = parseInt(document.getElementById("inputC2").value);
    document.getElementById("result3").innerHTML = max(a2,b2,c2);

})


//-----------------function b3------------------------


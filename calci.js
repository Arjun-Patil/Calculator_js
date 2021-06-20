buttons = document.querySelectorAll(".number");
res = document.querySelector(".res");

buttons.forEach(element => {
    element.addEventListener("click", function(){
        res.value += element.innerHTML;
    })
});

result = document.querySelector(".enter");

result.addEventListener("click", function(){
    let x = res.value;
    let y = eval(x);
    res.value = y;
});

clear = document.querySelector(".clear");

clear.addEventListener("click", function(){
    res.value="";
});

back = document.querySelector(".back");

back.addEventListener("click", function(){
    res.value = res.value.substr(0,res.value.length-1);
})
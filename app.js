let countKeep = 0;
const reduce = document.querySelector('.btn-reduce');
const reset = document.querySelector('.btn-reset');
const increase = document.querySelector('.btn-increase');

const count = document.querySelector('.count');

reduce.addEventListener('click',function(){
    countKeep--;
    count.textContent = countKeep;
    if(countKeep<0){
        count.style.color = "red";
    }
    else if(countKeep == 0){
        count.style.color = "black";
    }
});

reset.addEventListener('click',function(){
    countKeep = 0 ;
    count.textContent = countKeep;
    if(countKeep == 0){
        count.style.color = "black";
    }
});

increase.addEventListener('click',function(){
    countKeep++;
    count.textContent = countKeep;
    if(countKeep>0){
        count.style.color = "green";
    }
    else if(countKeep == 0){
        count.style.color = "black";
    }
});
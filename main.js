var btn = document.querySelectorAll('button');
var gameEl = ['paper','scissors','rock'];
var user=document.querySelector('#hpPlayer span');
var com=document.querySelector('#hpCpu span');
var userScore =100;
var CPUScore =100;
var locked = false;
var restart = document.querySelector('#reset');



const result ={
   paper:{
   paper:'Draw',
   scissors:'CPU Wins',
   rock:'User Wins'  
},
   scissors:{
   paper:'User Wins',
   scissors:'Draw',
   rock:'CPU Wins'   
},
   rock:{
   paper:'CPU Wins',
   scissors:'User Wins',
   rock:'Draw' 
}
   
};

for(i=0;i<btn.length;i++){
   btn[i].addEventListener('click',game);
}

restart.addEventListener('click', reset);

function game(){
   if(locked==false){
   var CPU = gameEl[Math.floor(Math.random()*3)];
   var styleCpu= document.querySelector('#computer .'+CPU);
   var score = document.querySelector('#score');
 var el = document.querySelectorAll('.element');   
   for(i=0;i<el.length; i++){
   el[i].style.opacity=0;}
    

  if(this.id=='paper'){
     score.innerHTML=result.paper[CPU];
     document.querySelector('#player .paper').style.opacity=1;
    styleCpu.style.opacity=1;
  }else if(this.id=='rock'){
     score.innerHTML=result.rock[CPU];
       document.querySelector('#player .rock').style.opacity=1;
     styleCpu.style.opacity=1;
  }else if(this.id=='scissors'){
    score.innerHTML=result.scissors[CPU];
       document.querySelector('#player .scissors').style.opacity=1;
     styleCpu.style.opacity=1;
  }
   
   if(score.innerHTML=="CPU Wins"){
      userScore-=10;
      user.style.width=userScore+'%';
      user.innerHTML=userScore+"%";
   }else if(score.innerHTML=="User Wins"){
      CPUScore-=10;
      com.style.width=CPUScore+'%';
      com.innerHTML=CPUScore+"%";
      
   }
   winner();
}}


function winner(){
    if(userScore ==0){
       score.innerHTML='Lost';
       score.style.color='red';
       locked=true;
       
   }else if(CPUScore ==0){
       score.innerHTML='Victory';
      score.style.color='green';
      locked=true;
   }
}

function reset(){
   location.reload();
}
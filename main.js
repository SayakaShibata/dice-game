//roll Dice
function roll1 (){
  var die1 = Math.floor(Math.random( )* 6) ;
  var die3 = Math.floor(Math.random( )* 6) ;
  var a1= [0,64,128,192,256,320]
  var a3= [0,64,128,192,256,320]
  var c1= [1,2,3,4,5,6]
  var c3= [1,2,3,4,5,6]
  document.getElementById('dice1').style.backgroundPosition = '-'+a1[die1]+'px -128px';
  document.getElementById('dice3').style.backgroundPosition = '-'+a3[die3]+'px -128px';
  var player1 = parseInt(c1[die1] + c3[die3]);
  document.getElementById('p3').innerHTML= 'total = '+ player1;

  var html1 =  '<ul class="list-group">';
for (var n=0; n< player1.length; n++){   
      html1 += `<li class="list">`+player1[n]+`</li>`;
    }
      html1+=`</ul>`
  document.getElementById(`log1`).innerHTML=html1

  men1=player1;
  dice1=die1;
  dice3=die3;
}

function roll2 (){
  var die2 = Math.floor(Math.random( )* 6) ;
  var die4 = Math.floor(Math.random( )* 6) ;
  var a2= [0,64,128,192,256,320]
  var a4= [0,64,128,192,256,320]
  var c2= [1,2,3,4,5,6]
  var c4= [1,2,3,4,5,6]
  document.getElementById('dice2').style.backgroundPosition = '-'+a2[die2]+'px -320px';
  document.getElementById('dice4').style.backgroundPosition = '-'+a4[die4]+'px -320px';
  var player2 = parseInt(c2[die2] + c4[die4]);
  document.getElementById('p4').innerHTML= 'total = '+ player2;
  
  var html2 =  '<ul class="list-group">';
for (var f=0; f< player2.length; f++){   
      html2 += `<li class="list">`+player2[f]+`</li>`;
    }
      html2+=`</ul>`
  document.getElementById(`log2`).innerHTML=html2
  men2=player2;
  dice2=die2;
  dice4=die4;
}

//rolling
  var counts =[
{
  'dic1': 0,
  'dic2': 0
}
]

function roll() {
 if(men1>men2) document.getElementById('winner').innerHTML='player 1 is win';
 if(men1<men2) document.getElementById('winner').innerHTML='player 2 is win';
 if(men1===men2) document.getElementById('winner').innerHTML='- It is TEI -'; 

  var sum1 = 0;
  var sum2 = 0;
  var win1 ={
      'dic1':1,
      'dic2':0
  };
  var win2 ={
      'dic1':0,
      'dic2':1
  };
  var same ={
      'dic1':0,
      'dic2':0
  };

for (var f=0; f< counts.length; f++){   
    sum1 += parseInt(counts[f].dic1);
    sum2 += parseInt(counts[f].dic2);
 document.getElementById('p1').innerHTML= sum1 +' win';
 document.getElementById('p2').innerHTML= sum2 +' win';
 sums1=sum1;
 sums2=sum2;
}
  if (sum1 ==5 || sum2 ==5){
    openModal() ;
   } else {
    if    (men1 > men2){
     counts.push(win1);
      } else {
        if (men1 < men2){
        counts.push(win2);
          } else {counts.push(same);
      }
    }
  }
}
//Key
function rollcount(){
  roll1();
  roll2();
  roll();
}

//show model
function openModal(){
var howMany = parseInt(counts.length);
var totalSame = howMany - sums1 - sums2 -1 ;
if(sums1>sums2) document.getElementById('final').innerHTML='player 1 is win<br>TEI =  ' +totalSame;
if(sums1<sums2) document.getElementById('final').innerHTML='player 2 is win<br>TEI =  '+totalSame;
$(`#exampleModalCenter`).modal({'show':true});
}


//Game Over
function reGame(){
  location.reload();
}

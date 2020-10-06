var playing = false;
var score;
var timeremaining;
var action;
var correctAnswer;

document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
    
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        hide("gameover");
        document.getElementById("startreset").innerHTML = "Reset Game";

        startCountdown();
        generateQA();

    }
}


for(i=1 ; i< 5; i++){
    document.getElementById("box"+i).onclick = function(){

    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score ++;
            document.getElementById("scorevalue").innerHTML = score;

            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);

            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
                }, 1000);
            }
        }
    }
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -=1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){

            stopCountdown();
           
            show("gameover");

            document.getElementById("gameover").innerHTML = "<p>Game Over!</p> <p>Your Score is " + score +  ".</p>";

            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}
function stopCountdown(){
    clearInterval(action);
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y;

    document.getElementById("Qshow").innerHTML = x + "x" + y;
    var correctPostion = 1 + Math.round(3*Math.random());
    document.getElementById("box"+correctPostion).innerHTML = correctAnswer; // Correct Answer

    var anwsers = [correctAnswer];
        for(i=1 ; i<5 ; i++){
            if(i != correctPostion){
                var wrongAnswer;
                do{
                    wrongAnwser = (1 + Math.round(9 * Math.random())) *
                                  (1 + Math.round(9 * Math.random()));
                } while(anwsers.indexOf(wrongAnswer)>-1)
                document.getElementById("box"+i).innerHTML = wrongAnwser;
                anwsers.puch(wrongAnwser);
            }
        }
}

var X = 10;
var Y = 10;
var Geld = 0; 
var speed = 5;
var score = 0;
var Higthscore = 0;
var Kauf   = 2;
var ballkauf   = 0 ; 
var upgrade = 1; 
var upgradePunkte = 1;
var Ballfabe = 66;
var Punkte = 1;
function setup() {
    createCanvas(1400, 600);
    startPage();
}

function game() {
    background(255, 0, 0);


    draw = function () {
        background(125, 85, 85);

        if (mouseIsPressed) {
            speed = speed - 5;



        }
        
        //Scoreboard
        text("Deine Punktzahl: " + score, 171, 94, 200, 213);
        //Ball    
        fill(66, Ballfabe, 66);
        ellipse(X, 327, 30, 30);
        //Text 
        textSize(30);

        if (score > 50) {
            speed = speed + 1;
        }

        if (score > 100) {
            speed = speed - 1;
        }

        if (score > 150) {
            speed = speed + 1;
        }

        if (score > 200) {
            speed = speed +1;
        }
        if (score > 250) {
            speed = speed + 1;
        }
        if (score === 300) {
            speed = speed - 1;
        } if (score === 350) {
            speed = speed + 1;
        } if (score < 400) {
            speed = speed + 1;
        }
        X = X + speed;



        if (X > 1400) {
            GameOver();


        }
        if (X < 40) {
            speed = 10;
            score = score + Punkte
            
        }
         
        }
       
        
    }
            
       



       
       
        
               
               
           

        
   
        

    

function GameOver() {
    draw = function () {
       
       
        
        textSize(80);
        text("GameOver ", 200, 200, 300, 200);
        textSize(20)
        text("Deine Punkte:" + score, 359, 491, 200, 300);
        backButton();
        if ( score > Higthscore ) {
        Higthscore =  score;
        Geld + score
           
        }
        
    }


};

function backButton() {
    fill(0, 255, 21);
        rect(5, 5, 45, 45);
        fill(255, 0, 0);

        textSize(17);
        text("BACK", 3, 15, 45, 30);

        if (mouseIsPressed && mouseX < 50 && mouseX > 5 && mouseY < 50 && mouseY > 5) {
            X = 0;
            startPage();
            score = 0;
            X = 40;
        }
};










function startPage() {
    background(255, 0, 0);
    textSize(20);
    fill(255, 255, 255);
    text("Du bist der Flummi!!! Das Spiel ohne Logik", 164, 62, 93, 300);
    text("Versuche so viele Punkte wie möglich zu bekommen", 180, 285, 200, 300);
    text("Bester Score :  "+ Higthscore ,120,400,200,300)
    //Button
    fill(255, 255, 255);
    rect(144, 187, 156, 68);
    fill(212, 159, 159);
    text("Starte das Spiel ", 164, 200, 200, 300);

    draw = function () {
        if (mouseIsPressed && mouseX > 144 && mouseX < 300 && mouseY > 187 && mouseY < 255) {
            //rect(144, 187, 156, 68);
            game();
        }
    }
    if (Kauf = 2 ){
      Ballfabe = Ballfabe + 30;

    }

    if (ballkauf  = 2 ) {
        Ballfabe = Ballfabe + 50; 



    }

    if (upgrade = 1) {
        speed = speed -1;    
    }
   
    if (upgradePunkte = 1 ) {
      Punkte = Punkte + 2;     
    }


}


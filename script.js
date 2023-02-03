/* defining all diamonds */

const diamonds =[
    {color:blue,
     ID:document.getElementById("blue"),
     position: 0,
     score: 0,
     scoreBoard: document.getElementById("score-blue")},
    {color:red,
     ID:document.getElementById("red"),
     position:0,
     score:0,
     scoreBoard: document.getElementById("score-red")
    },
    {color:purple,
     ID:document.getElementById("purple"),
     position: 0,
     score: 0,
     scoreBoard: document.getElementById("score-purple")},
    {color:green,
     ID: document.getElementById("green"),
     position: 0,
     score: 0,
     scoreBoard: document.getElementById("score-green")
    }    
]

function moveRight(move, requirements){
    if(diamonds[0].score<10 && diamonds[1].score<10 && diamonds[2].score<10 && diamonds[3].score<10) {
        move.score +=1;
        move.position += 4.5;
        move.ID.style.left = move.position + "%";
        move.scoreBoard.innerHTML = "<p>" + move.score + "</p>";
        console.log(move.position);
    if(move.score > 9) {
        move.scoreBoard.style.color = "red";
    }}
}
    
    
function reset(object) {
    for (var i =0, l =diamonds.length; i<l; i++){
        diamonds[i].position = 0;
        diamonds[i].score=0;
        diamonds[i].ID.style.left = diamonds[i].position + "%";
        diamonds[i].scoreBoard.innerHTML = "<p>0</p>";
        diamonds[i].scoreBoard.style.color = "black";
    }
}
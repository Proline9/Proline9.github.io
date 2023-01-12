/* document.write("Welcome to EmANRUS EmAN (Group) multi-game program!");

function run(){
    
    document.write("</br>");
    var numar = prompt("Choose a game by entering corresponding number!");

    if(numar=1){
        ex1();
    }



}

function ex1(){
    var greutate = prompt("Please enter your current earth weight: ");
    if(greutate= 1)
    {
        console.log("foarte bine");
    }
}

run(); */

function ex1(){
    var numar = prompt("Please enter your current earth weight: ");
    document.getElementById("display01").innerHTML=(`Your current earth weight is:${numar}`);
    document.getElementById("display02").innerHTML= ("I have information for the following planets:");
    document.getElementById("display03").innerHTML = (`1. Venus <br> 2. Mars <br> 3. Jupiter <br>4. Saturn<br>5. Uranus<br> <button id="planete">Chose</button>` )
    
    document.getElementById("planete").onclick = function (){alege()};
    function alege(){
        var alegere= prompt("Which planet are you visiting?");
        
        if(alegere == 1){
            document.getElementById("display04").innerHTML="Your weight would be "+numar*0.91 + " kilos on Venus.";
        }
        else if(alegere == 2){
            document.getElementById("display04").innerHTML="Your weight would be "+numar*0.38+" kilos on Mars.";
        }
        else if(alegere == 3){
            document.getElementById("display04").innerHTML="Your weight would be "+numar*2.14+" kilos on Jupiter.";
        }
        else if(alegere == 4){
            document.getElementById("display04").innerHTML="Your weight would be "+numar*0.91+" kilos on Saturn.";
        }
        else if(alegere == 5){
            document.getElementById("display04").innerHTML="Your weight would be "+numar*0.86+" kilos on Uranus.";
        }
        
        setTimeout(reload,8000)
        function reload(){
            location.reload();
            
        }
        
    }
  
}
clearTimeout(reload());

function ex2(){
    var randomNumber= Math.floor(Math.random() * 3);
    var inp;
    var incercari =10;
    inp=prompt("Try to guess it.")
        for(var i = 1;i<=incercari;i++){
            if(inp == randomNumber){
                document.getElementById("display02").innerHTML="That's right! You're a good guesser.";
                break;
            }else if(inp < randomNumber){
                inp=prompt(` ${i}/10 tries left\n`+"That is lower. Guess again." )
            }
            else if(inp > randomNumber){
                inp=prompt(`${i}/10 tries left\n`+"That is higher. Guess again.")
            }
            if(i==10){
                document.getElementById("display02").innerHTML= "Your are out of tries"
            }
            document.getElementById("display01").innerHTML="The number is: " + randomNumber;
        }
}

function ex5(){
    document.getElementById("da").innerHTML=` 
        <div id="gameContainer">
        <h1>Tic Tac Toe</h1>
        <div id="cellContainer">
            <div cellIndex="0" class="cell"></div>
            <div cellIndex="1" class="cell"></div>
            <div cellIndex="2" class="cell"></div>
            <div cellIndex="3" class="cell"></div>
            <div cellIndex="4" class="cell"></div>
            <div cellIndex="5" class="cell"></div>
            <div cellIndex="6" class="cell"></div>
            <div cellIndex="7" class="cell"></div>
            <div cellIndex="8" class="cell"></div>
        </div>
        <h2 id="statusText"></h2>
        <button id="restartBtn">Restart</button>
    </div>`
    const cells = document.querySelectorAll(".cell");
    const statusText = document.querySelector("#statusText");
    const restartBtn = document.querySelector("#restartBtn");
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let options = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let running = false;
    
    initializeGame();
    
    function initializeGame(){
        
        cells.forEach(cell => cell.addEventListener("click", cellClicked));
        restartBtn.addEventListener("click", restartGame);
        statusText.textContent = `${currentPlayer}'s turn`;
        running = true;
    }
    function cellClicked(){
        const cellIndex = this.getAttribute("cellIndex");
    
        if(options[cellIndex] != "" || !running){
            return;
        }
    
        updateCell(this, cellIndex);
        checkWinner();
    }
    function updateCell(cell, index){
        options[index] = currentPlayer;
        cell.textContent = currentPlayer;
    }
    function changePlayer(){
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        statusText.textContent = `${currentPlayer}'s turn`;
    }
    function checkWinner(){
        let roundWon = false;
    
        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cellA = options[condition[0]];
            const cellB = options[condition[1]];
            const cellC = options[condition[2]];
    
            if(cellA == "" || cellB == "" || cellC == ""){
                continue;
            }
            if(cellA == cellB && cellB == cellC){
                roundWon = true;
                break;
            }
        }
    
        if(roundWon){
            statusText.textContent = `${currentPlayer} wins!`;
            running = false;
        }
        else if(!options.includes("")){
            statusText.textContent = `Draw!`;
            running = false;
        }
        else{
            changePlayer();
        }
    }
    function restartGame(){
        currentPlayer = "X";
        options = ["", "", "", "", "", "", "", "", ""];
        statusText.textContent = `${currentPlayer}'s turn`;
        cells.forEach(cell => cell.textContent = "");
        running = true;
    }
}

function ex4(){

    var vocale = ["a","e","i","o","u","A","E","I","O","U"];
    var consoane = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r",
    "s","t","v","w","x","y","z","B","C","D","F","G","H","J","K","L",
    "M","N","P","Q","R","S","T","V","W","X","Y","Z"];
    
    var cuvant = prompt(`Welcome to the pig latin dictionary! \n
    Enter any english word to find it's counterpart in pig latin: `)
    var primaLitera = cuvant.charAt(0);
    
    for(var i=0; i<consoane.length;i++){
        if(primaLitera == consoane[i]){
            var cuvantNou= cuvant.replace(primaLitera,"");
            document.getElementById("display01").innerHTML="Your insertion: "+cuvant;
            document.getElementById("display02").innerHTML="Here is your translated word: "+ cuvantNou + primaLitera +"ay";
         }
    }
    
    for(var i=0; i<vocale.length;i++){
        if(primaLitera == vocale[i]){
            document.getElementById("display01").innerHTML="Your insertion: "+cuvant;
            document.getElementById("display02").innerHTML="Here is your translated word: "+ cuvant +"yay"
         }
    }
}

function ex3(){
    document.getElementById("display01").innerHTML=`Choose a operation from the calculator: <br>`
    document.getElementById("display02").innerHTML="1. Addition <br> 2. Subtraction <br> 3. Multiplication <br> 4. Division <br> 5. Modulus <br> 6. Power <br> 7. Maximum <br> 8. Minimum <br> <button id='calc'>Chose</button>"
    document.getElementById("calc").onclick = function (){alege()};
    
    function alege(){
        var al = prompt("Choose a operation from the calculator: ")
        if(al == 1){
            add();
        }else if(al == 2){
            minus();
        }else if(al ==3){
            multi();
        }else if(al == 4){
            div();
        }else if(al == 5){
            modulo();
        }else if(al == 6){
            pow();
        }
        function add(){
            var a,b;
            a=prompt("Please enter left operand: ")
            b=prompt("Please enter right operand: ")
            var c = a+b;
            document.getElementById("display03").innerHTML= `Addition of ${a} and ${b} equals: ${c}`;
            document.getElementById("display02").innerHTML;
        }
        function minus(){
            var a,b;
            a=prompt("Please enter left operand: ")
            b=prompt("Please enter right operand: ")
            var c = a-b;
            document.getElementById("display03").innerHTML= `Subtraction of ${a} and ${b} equals: ${c}`;
        }
        function multi(){
            var a,b;
            a=prompt("Please enter left operand: ")
            b=prompt("Please enter right operand: ")
            var c = a*b;
            document.getElementById("display03").innerHTML= `Multiplication of ${a} and ${b} equals: ${c}`;
        }
        function div(){
            var a,b;
            a=prompt("Please enter left operand: ")
            b=prompt("Please enter right operand: ")
            var c = a/b;
            document.getElementById("display03").innerHTML= `Division of ${a} and ${b} equals: ${c}`;
        }
        function modulo(){
            var a,b;
            a=prompt("Please enter left operand: ")
            b=prompt("Please enter right operand: ")
            var c = a%b;
            document.getElementById("display03").innerHTML= `Modulus of ${a} and ${b} equals: ${c}`;
        }
        function pow(){
            var a,b;
            a=prompt("Please enter left operand: ")
            b=prompt("Please enter right operand: ")
            var c = Math.pow(a, b);
            document.getElementById("display03").innerHTML= `Value of ${a} raised to a power of ${b} equals: ${c}`;
            
        }
        function max(){
    
        }
        function min(){
    
        }
    }
   
}   




var nS = null; //numSelected
var tS = null; 

var error = 0;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function(){
    setGame();
}

function setGame(){
    for(let i = 1; i<=9; i++){
        let n = document.createElement("div");
        n.id = i; //    <div id=" i "></div>
        n.innerText = i;//    <div id=" i "> i </div>
        n.addEventListener("click", selectNumber);
        n.classList.add("n");//    <div id=" i " class = " i "> i </div>
        document.getElementById("digit").appendChild(n);
    }

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "-"){
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if(r ==2 || r == 5){
                tile.classList.add("hl");
            }
            if(c ==2 || c == 5){
                tile.classList.add("vl");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if(nS != null){
        nS.classList.remove("n-selected");
    }
    nS = this;
    nS.classList.add("n-selected");
}

function selectTile() {
    if(nS){
        if(this.innerText != ""){
            return;
        }

        let cords = this.id.split("-");
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);

        if(solution[r][c] == nS.id) {
            this.innerText = nS.id;
        }
        else{
            error += 1;
            document.getElementById("error").innerText = error;
        }

    }
}
const_ = document, 
cols = Array.from(_.queryselectororAll(".baord > span"));
reset = _.queryselectororAll('#reset')

let cur = true,
let arr = new Array(9).fill(null)

const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function event(can){
    reset.addEventListener("click",fnreset)
    for(let col of cols)
    if(can)
    col.addEventListener('click',play)
    else
    col.removeEventListener('click',play)
}
Event(true)
function play(e){
    const



    
}
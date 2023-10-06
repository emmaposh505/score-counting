let homePoints = document.getElementById("points1-el")
let guestPoints = document.getElementById("points2-el")

let count1=0
let count2=0

function plus1Pointhome(){
    count1 +=1
    homePoints.textContent=count1
}
function plus2Pointhome(){
    count1 +=2
    homePoints.textContent=count1
}
function plus3Pointhome(){
    count1 +=3
    homePoints.textContent=count1
}

function plus1Pointguest(){
    count2 +=1
    guestPoints.textContent=count2
}
function plus2Pointguest(){
    count2 +=2
    guestPoints.textContent=count2
}
function plus3Pointguest(){
    count2 +=3
    guestPoints.textContent=count2
}


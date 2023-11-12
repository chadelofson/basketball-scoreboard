let homeScore = 0;
let guestScore = 0;
let homeEl = document.getElementById("homePoints")
let guestEl = document.getElementById("guestPoints")

function addHomeOne() {
    homeScore += 1
    homeEl.textContent = homeScore
    highlightLeader()    
}

function addHomeTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
    highlightLeader()
}

function addHomeThree() {
    homeScore += 3    
    homeEl.textContent = homeScore
    highlightLeader()
}

function addGuestOne() {
    guestScore += 1    
    guestEl.textContent = guestScore
    highlightLeader()
}

function addGuestTwo() {
    guestScore += 2    
    guestEl.textContent = guestScore
    highlightLeader()
}

function addGuestThree() {
    guestScore += 3    
    guestEl.textContent = guestScore
    highlightLeader()
}

function newGame() {
    homeScore = 0
    homeEl.textContent = homeScore
    homeEl.classList.remove("leader")
    guestScore = 0
    guestEl.textContent = guestScore
    guestEl.classList.remove("leader")
}

function highlightLeader() {
    if (homeScore > guestScore) {
        homeEl.classList.add("leader")
        guestEl.classList.remove("leader")
    } else if (guestScore > homeScore) {
        guestEl.classList.add("leader")
        homeEl.classList.remove("leader")   
    } else {
        homeEl.classList.remove("leader")
        guestEl.classList.remove("leader")
    }
}
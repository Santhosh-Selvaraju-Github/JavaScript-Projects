let player;

const edit = () => {
    document.getElementById("user").style.display = "none"
    document.getElementById("name").style.display = "flex"
}
const submit = () => {
    document.getElementById("user").style.display = "flex"
    document.getElementById("name").style.display = "none"
    let user1 = document.getElementById("text").value
    document.getElementById("user1").innerHTML = user1.trim().charAt(0).toUpperCase() + user1.slice(1).toLowerCase()
}

let rock = () => {
    let p = parseInt(document.getElementById("p").innerHTML)
    let c = parseInt(document.getElementById("c").innerHTML)
    let user1 = document.getElementById("user1").innerHTML

    if (p < 10 && c < 10) {
        player = document.getElementById("btn3").innerHTML
        document.getElementById("img1").src = "a1.png"

        let computerChoice = Math.floor(Math.random() * 3 + 1)

        const computer = computerChoice === 1 ? "ROCK"
            : computerChoice === 2 ? "PAPER" : "SCISSOR"

        if (computer === "ROCK") {
            document.getElementById("img2").src = "b2.png"
        } else if (computer === "PAPER") {
            document.getElementById("img2").src = "b3.png"
        } else {
            document.getElementById("img2").src = "b1.png"
        }

        if (player === computer) {
            document.getElementById("h1").innerHTML = "Tie"
        } else if (player === "ROCK" && computer === "PAPER") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "ROCK" && computer === "SCISSOR") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        } else if (player === "PAPER" && computer === "ROCK") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        } else if (player === "PAPER" && computer === "SCISSOR") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "SCISSOR" && computer === "ROCK") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "SCISSOR" && computer === "PAPER") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        }

        let winner = document.getElementById("h1").innerHTML
        p++
        c++
        if (winner.includes("Computer")) {
            document.getElementById("c").innerHTML = c
        } else if (winner.includes(`${user1}`)) {
            document.getElementById("p").innerHTML = p
        }
        let cc = document.getElementById("c").innerHTML
        let pp = document.getElementById("p").innerHTML
        if (pp == 10) {
            document.getElementById("h1").innerHTML = `${user1} Winner`
        } else if (cc == 10) {
            document.getElementById("h1").innerHTML = "Computer Winner"
        }
    }
}

let paper = () => {
    let p = parseInt(document.getElementById("p").innerHTML)
    let c = parseInt(document.getElementById("c").innerHTML)
    let user1 = document.getElementById("user1").innerHTML

    if (p < 10 && c < 10) {
        player = document.getElementById("btn3").innerHTML
        document.getElementById("img1").src = "a1.png"

        let computerChoice = Math.floor(Math.random() * 3 + 1)

        const computer = computerChoice === 1 ? "ROCK"
            : computerChoice === 2 ? "PAPER" : "SCISSOR"

        if (computer === "ROCK") {
            document.getElementById("img2").src = "b2.png"
        } else if (computer === "PAPER") {
            document.getElementById("img2").src = "b3.png"
        } else {
            document.getElementById("img2").src = "b1.png"
        }

        if (player === computer) {
            document.getElementById("h1").innerHTML = "Tie"
        } else if (player === "ROCK" && computer === "PAPER") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "ROCK" && computer === "SCISSOR") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        } else if (player === "PAPER" && computer === "ROCK") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        } else if (player === "PAPER" && computer === "SCISSOR") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "SCISSOR" && computer === "ROCK") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "SCISSOR" && computer === "PAPER") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        }

        let winner = document.getElementById("h1").innerHTML
        p++
        c++
        if (winner.includes("Computer")) {
            document.getElementById("c").innerHTML = c
        } else if (winner.includes(`${user1}`)) {
            document.getElementById("p").innerHTML = p
        }
        let cc = document.getElementById("c").innerHTML
        let pp = document.getElementById("p").innerHTML
        if (pp == 10) {
            document.getElementById("h1").innerHTML = `${user1} Winner`
        } else if (cc == 10) {
            document.getElementById("h1").innerHTML = "Computer Winner"
        }
    }
}

let scissor = () => {
    let p = parseInt(document.getElementById("p").innerHTML)
    let c = parseInt(document.getElementById("c").innerHTML)
    let user1 = document.getElementById("user1").innerHTML

    if (p < 10 && c < 10) {
        player = document.getElementById("btn3").innerHTML
        document.getElementById("img1").src = "a1.png"

        let computerChoice = Math.floor(Math.random() * 3 + 1)

        const computer = computerChoice === 1 ? "ROCK"
            : computerChoice === 2 ? "PAPER" : "SCISSOR"

        if (computer === "ROCK") {
            document.getElementById("img2").src = "b2.png"
        } else if (computer === "PAPER") {
            document.getElementById("img2").src = "b3.png"
        } else {
            document.getElementById("img2").src = "b1.png"
        }

        if (player === computer) {
            document.getElementById("h1").innerHTML = "Tie"
        } else if (player === "ROCK" && computer === "PAPER") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "ROCK" && computer === "SCISSOR") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        } else if (player === "PAPER" && computer === "ROCK") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        } else if (player === "PAPER" && computer === "SCISSOR") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "SCISSOR" && computer === "ROCK") {
            document.getElementById("h1").innerHTML = "Computer Win's"
        } else if (player === "SCISSOR" && computer === "PAPER") {
            document.getElementById("h1").innerHTML = `${user1} Win's`
        }

        let winner = document.getElementById("h1").innerHTML
        p++
        c++
        if (winner.includes("Computer")) {
            document.getElementById("c").innerHTML = c
        } else if (winner.includes(`${user1}`)) {
            document.getElementById("p").innerHTML = p
        }
        let cc = document.getElementById("c").innerHTML
        let pp = document.getElementById("p").innerHTML
        if (pp == 10) {
            document.getElementById("h1").innerHTML = `${user1} Winner`
        } else if (cc == 10) {
            document.getElementById("h1").innerHTML = "Computer Winner"
        }
    }
}


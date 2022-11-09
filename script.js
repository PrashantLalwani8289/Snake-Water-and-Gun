let user = prompt("Enter S, W or G").toUpperCase();
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];

let match =  (user, cpu) =>{
    if(cpu === user){
        return "Nobody.";
    }
    if(cpu === "S" && user === "W"){
        return "cpu";
    }
    if(cpu === "S" && user === "G"){
        return "user";
    }
    if(cpu === "W" && user === "S"){
        return "user";
    }
    if(cpu === "G" && user === "W"){
        return "user";
    }
    if(cpu === "G" && user === "S"){
        return "cpu";
    }
    if(cpu === "W" && user === "G"){
        return "cpu";
    }
}
let ans = document.querySelector(".ans");

let result = match(user, cpu);
ans.innerHTML = (`CPU: ${cpu} <br> USER: ${user} <br> The winner is ${result}`);
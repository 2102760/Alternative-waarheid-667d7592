const antwoorden = {
    Frankrijk : "Parijs",
    spin : "8",
    meer : "IJsselmeer",
    auto: ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    eiland: ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]
};

function checkAnwsers() {
    let allGood = true;

    Object.keys(antwoorden).forEach(function (item) {
        let element = document.getElementById(item)
        if(Array.isArray(antwoorden[item])) {
            if (antwoorden[item].includes(element.value)) {
                element.classList.add("bg-green");
            } else {
                element.classList.add("bg-red");
                allGood = false;
            }
        } else {
            if (element.value === antwoorden[item]) {
                element.classList.add("bg-green");
            } else {
                element.classList.add("bg-red");
                allGood = false;
            }
        }
    });

    if (allGood){
        document.getElementById("correct").innerText = "Alle antwoorden zijn correct"
    }
}
let predictForm = document.getElementById("userAccountSetupForm")

predictForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = {
        'age': document.getElementById("age").value,
        'height_cm': document.getElementById("height_cm").value,
        'weight_kg': document.getElementById("weight_kg").value,
        'league_level': document.getElementById("league_level").value,
        'value_eur': document.getElementById("value_eur").value,
        'wage_eur': document.getElementById("wage_eur").value,
        'player_positions': document.getElementById("player_positions").value,
        'preferred_foot': document.getElementById("preferred_foot").value,
        'international_reputation': document.getElementById("international_reputation").value,
        'skill': document.getElementById("skill").value,
        'work_rate': document.getElementById("work_rate").value,
        'pace': document.getElementById("pace").value,
        'shooting': document.getElementById("shooting").value,
        'passing': document.getElementById("passing").value,
        'dribbling': document.getElementById("dribbling").value,
        'defending': document.getElementById("defending").value,
        'physic': document.getElementById("physic").value,
        'left_foot': document.getElementById("Left").value,
        'right_foot': document.getElementById("Right").value,
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/predict");
    //xhr.setRequestHeader("Accept", "multipart/form-data");
    xhr.setRequestHeader("Content-Type", "multipart/form-data");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    console.log(data)

    xhr.send(data)



});
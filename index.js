const fetchRewards_url = 'https://frontend-take-home.fetchrewards.com/form';

async function getData() {
    const response = await fetch(fetchRewards_url);
    const data = await response.json();
    // console.log(data);

    const { occupations, states } = data;

    // Occupations data for dropdown list
    let occupationSelector = document.getElementById("select-occupation");
    for (let i = 0; i < occupations.length; i++) {
        let option = document.createElement("option");
        option.value = occupations[i];
        option.innerHTML = occupations[i];
        occupationSelector.appendChild(option);
    }

    // States data for dropdown list
    let stateSelector = document.getElementById("select-state");
    for (let i = 0; i < states.length; i++) {
        let option = document.createElement("option");
        option.value = states[i].name;
        option.innerHTML = states[i].name;
        stateSelector.appendChild(option);
    }
}

getData();
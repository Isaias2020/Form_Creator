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

async function submit(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const occupation = document.getElementById("select-occupation");
    const occupationOption = occupation.options[occupation.selectedIndex].text;
    const state = document.getElementById("select-state");
    const stateOption = state.options[state.selectedIndex].text;

    form.onsubmit = submit;

    const data = {
        name: name,
        email: email,
        password: password,
        occupation: occupationOption,
        state: stateOption
    }
    console.log(JSON.stringify(data));
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(fetchRewards_url, options)
        .then(res => {
            console.log(res)
            if (res.ok) {
                document.getElementById('thanks').removeAttribute("hidden");
                console.log(document.getElementById("thanks"));
            }
        })
}

const form = document.getElementById("form");
form.addEventListener("submit", submit);
getData();
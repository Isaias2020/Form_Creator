const fetchRewards_url = 'https://frontend-take-home.fetchrewards.com/form';

async function getData() {
    const response = await fetch(fetchRewards_url);
    const data = await response.json();
    console.log(data);
}

getData();
const _apikey = '24b497fd0cbed1ff9ffecb92469e2cec';
const _url = 'https://gateway.marvel.com:443/v1/public/characters?apikey='

async function MarvelService(url) {
    const response = await fetch(`${url || _url}${_apikey}`);
    const data = await response.json();
    // console.log(data.data.results);

    return data.data.results;
}

export default MarvelService;
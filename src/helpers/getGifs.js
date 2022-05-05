export const  getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=dUNk2SqQ2CjjqcFrG7ltE5OEC9tay7ZL`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    console.log(gifs);
    return gifs;
}

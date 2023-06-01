export const getGifs = async (category) => { 
    const urlApi = 'https://api.giphy.com/v1/gifs/search?api_key=B1dhymrLeACK8u5zwNMO5uJ9sO9Fqvu0&q=' + category + '&limit=20'
    const resp = await fetch(urlApi);
    const {data = []} = await resp.json(); 

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url  
    }));

    return gifs;
}

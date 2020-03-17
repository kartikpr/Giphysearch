const GIPHY_API_KEY = 'TM7nEP9qGFANCGb3rW5eGPxeYpFhoZ6E';
const giphy = require('giphy-api')(GIPHY_API_KEY);

const searchGifs = async (query) => {
  const res = await giphy.search(query);
  const gifs = res.data.map((item) => {
    return {
      id: item.id,
      url: item.images.preview_gif.url
    };
  });
  return gifs;
}

export default searchGifs;

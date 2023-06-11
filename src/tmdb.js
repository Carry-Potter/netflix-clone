import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '94d660a629d9ae773753ee76760166b0',
  },
});

async function request(endpoint) {
  const { data } = await instance.get(endpoint);
  return data.results;
}

export default {
  getCategories: async () => ([
    {
      id: 'originals',
      title: 'Netflix Originals',
      items: await request('/discover/movie?with_genres=9648'),
    }, {
      id: 'trending',
      title: 'Recommended for You',
      items: await request('/trending/all/week'),
    }, {
      id: 'toprated',
      title: 'Top Rated',
      items: await request('/movie/top_rated'),
    }, {
      id: 'action',
      title: 'Action',
      items: await request('/discover/movie?with_genres=28'),
    }, {
      id: 'comedy',
      title: 'Comedy',
      items: await request('/discover/movie?with_genres=35'),
    }, {
      id: 'horror',
      title: 'Horror',
      items: await request('/discover/movie?with_genres=27'),
    }, {
      id: 'romance',
      title: 'Romance',
      items: await request('/discover/movie?with_genres=10749'),
    }, {
      id: 'documentary',
      title: 'Documentaries',
      items: await request('/discover/movie?with_genres=10770'),
    },
  ]),
};

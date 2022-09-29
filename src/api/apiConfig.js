const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ea0c7f755245ba3a17e5c6bf6b2aa410',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
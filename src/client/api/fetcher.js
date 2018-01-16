const FetcherFactory = require("../common/fetcher-factory").FetcherFactory;

let getHeaders = () => ({});

const fetcher = FetcherFactory.createApi({
    urlModifier: (url) => `https://api.github.com/users/${url}`,
    getHeaders: () => getHeaders(),
});

exports.fetcher = fetcher;

const fetcherConfig = {
    setHeaders: (fn) => getHeaders = fn,
};

exports.fetcherConfig = fetcherConfig;
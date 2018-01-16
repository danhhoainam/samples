const fetcher = require("./fetcher").fetcher;

const profileApi = {
    getProfile(username) {
        return fetcher.get(`${username}`).then(profile => profile);
    }
};

exports.profileApi = profileApi;
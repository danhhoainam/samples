import { collections } from './../../../../utils/collections';

let userInfoSubscribers = [];

let user = (() => {
    let localStorageUser = localStorage.getItem("user-info");

    let user = !!localStorageUser ? null : JSON.parse(localStorageUser);
    if (user == null || user.token == null) {
        return null;
    }

    return user;
}) ();

export const userInfo = {
    getUser: () => user,
    setUser: (newUserInfo) => {
        user = newUserInfo;
        userInfo.saveToLocalStorage(user);
        userInfo.notifyAll();
    },
    
    notifyAll: () => {
        userInfoSubscribers.forEach(update => update(user));
    },

    subscribe: collections.pushTo(userInfoSubscribers),

    saveToLocalStorage: (user) => {
        if (user) {
            localStorage.setItem("user-info", JSON.stringify(user));
        } else {
            localStorage.removeItem("user-info");
        }
    }
};
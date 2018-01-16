
function indexOf(arr, find) {
    if (arr == null) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (find(e, i)) {
            return i;
        }
    }
    return -1;
}

function pushTo(arr) {

    return (element) => {

        arr.push(element);

        return () => removeOneMutation(arr, element);
    };
}

function removeOneMutation(arr, targetElem) {
    if (arr == null) {
        return;
    }

    let i = arr.indexOf(targetElem);
    if (i == -1) {
        return;
    }
    arr.splice(i, 1);
}

export const collections = {
    pushTo,
    indexOf,
    /**
     * Immutable
     * @param arr
     * @param targetElem
     * @param replaceElem
     * @returns {null}
     */
    replaceOne(arr, targetElem, replaceElem) {
        return arr == null ? null : arr.map((t) => {
            if (targetElem == t) {
                return replaceElem;
            } else {
                return t;
            }
        });
    },
    removeOne(arr, targetElem) {
        return arr == null ? null : arr.filter((t) => targetElem !== t);
    },
};

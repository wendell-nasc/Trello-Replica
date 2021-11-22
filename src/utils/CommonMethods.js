export const Logger = (...args) => {
    console.log(args.join(", "));
}

export const isStringEmpty = (str) => {
    if(str !== undefined && str !== null && str !== "") {
        return false;
    }

    return true;
}

export const isListEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr !== "" && arr.length > 0) {
        return false;
    }

    return true;
}
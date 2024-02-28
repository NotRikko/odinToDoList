function containsObject(obj, array) {
    const index = array.indexOf(obj) ;
    return index !== -1 ? index: false
}

export {containsObject}
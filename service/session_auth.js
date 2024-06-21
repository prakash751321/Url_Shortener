
const sessionIdToUserMap = new Map()
//  new Map() is a hashmap (data structure in js), that stores key value pairs.
//  It provides fast access to values based on their keys and is commonly used to optimize lookup operations.


function setUser(id, user) {
    sessionIdToUserMap.set(id, user)
}

function getUser(id) {
    sessionIdToUserMap.get(id)
}

module.exports = {
    setUser,
    getUser
}
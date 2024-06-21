const mongoose = require("mongoose")

async function connectMongoDb(url) {
    return await mongoose.connect(url)
    .then(() => {
        console.log('Mango Db Connected');
    })
    .catch((err) => {
        console.log('Mango Db Connection Error', err);
    })
}

module.exports = {
    connectMongoDb
}
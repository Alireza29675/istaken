const axios = require('axios');

const instaCheck = async (id) => {
    try {
        await axios.get(`https://www.instagram.com/${id}/`);
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = { instaCheck }
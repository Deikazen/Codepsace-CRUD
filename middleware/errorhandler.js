module.exports = (err, req, res, next ) => {   
console.error(err.stack);      // bakal error kalau ada kesalahan / error di request handling
    res.status(500).send('Terjadi Error / Kesalahan');
}
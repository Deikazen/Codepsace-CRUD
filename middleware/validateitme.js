module.exports = (req, res, next) => {
    if (!name || typeof price !== 'number') {  // meriksa apakah variabel name atau price itu kosong atau tidak,, kalo misal kosong,
        return res.status(400).send('Price Harus Angka');  // maka si if nya tuh true, jadi si "return" nya bakal dijalanin 
    }
    next();
}
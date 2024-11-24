module.exports = (req, res, next ) => {
    console.log(`Request Type : ${req.method}`); // mencetak log / catatan aktivitas server ke terminal
    next();
}
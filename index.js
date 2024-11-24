const express = require('express') ;
const app = express();
const PORT = 4000 ; 

app.get('/',(req, res)=> {
    res.send('testttttd12346578');
    
});

app.listen(PORT, () => {
    console.log('Server runnning at http://localhost:4000');
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Worlddddd');
  res.send('Hello World');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
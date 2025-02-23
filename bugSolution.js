const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    res.send('Hello!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
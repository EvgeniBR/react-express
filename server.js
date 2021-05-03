const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const os = require('os');
app.use(cors());
const port = 8000;

app.get('/api/getUser', (req, res) => res.send({ username: os.userInfo().username }));

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});

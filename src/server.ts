import express from 'express'

const app = express();

app.get('/users', (req, res) => {
  return res.json({
    name: 'Evandro',
    emial: 'vando@gmail.com'
  })
})

app.listen(3000, () => console.log("Servidor no ar"));

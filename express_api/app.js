// Usando objeto express
const exp = require('constants')
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
  console.log(`Api explorers GET ALL requests ${new Date()}`)
  const explorer1 = {id1: 1, name: 'Eduardo1'}
  const explorer2 = {id1: 2, name: 'Eduardo2'}
  const explorer3 = {id1: 3, name: 'Eduardo3'}
  const explorer4 = {id1: 4, name: 'Eduardo4'}

  const explorers = [explorer1, explorer2, explorer3, explorer4]

  res.status(200).json(explorers)
})

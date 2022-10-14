const express = require("express")
const cors = require("cors")

const app = express()

const corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./app/models')
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to database'))
  .catch(error => {
    console.log('Cannot connect to database\n', error)
    process.exit()
  })

require('./app/routes/blog.routes')(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))
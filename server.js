const express = require('express'),
    app = express(),
    port = process.env.port || 3000,
    mongoose = require('mongoose');

// parsing requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());

// database configuration
const configDb = require('./config/config.js');
Book = require('./api/models/bookListModel'); // creating model loading

// mongoose instance connection url connection
mongoose.connect(configDb.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(res => {
    console.log('DB connected!');
}).catch(err => {
    console.log(Error, err.message);
    process.exit();
});


app.get('/', (req, res) => {
    res.json({ "message": "Welcome to ExpressMongoDbApp" });
    // res.status(404).send({ url: req.originalUrl + 'not found' });
});

// Importing the routes
require('./api/routes/bookListRoutes.js')(app);
app.listen(port);
console.log(`Book list Restfull Api server started on port: ${port}`);
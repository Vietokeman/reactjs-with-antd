// const express = require('express');
// const app = express();

// app.use(express.json());
// app.get('/hello', (req, res) => {
//     res.send(`Hello, ${req.query.person}!`);
// });

// app.listen(3000, () => {
//     console.log("Log in server", 3000);
// });

const express = require('express');
const app = express();
const { query, validationResult, matchedData } = require("express-validator")
app.use(express.json());
app.get('/hello', query('person').notEmpty().withMessage("Bo trong an lon a").escape(), (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        const data = matchedData(req);
        return res.send(`Hello, ${data.person}!`);
    }
    ; console.log(result.array())

    res.send({ errors: result.array() });
});

app.listen(3000, () => {
    console.log("Welcome to port", 3000)
});
require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const errorHandler = require('./handlers/error');
const { loginRequired, ensureCorrectUser} = require('./middleware/auth');
const PORT = process.env.PORT || 8081;
const db = require('./models');

const AUTH_ROUTES = require('./routes/auth');
const MESSAGES_ROUTES = require('./routes/messages');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', AUTH_ROUTES);
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, MESSAGES_ROUTES);

app.get('/api/messages', loginRequired, async function(req, res, next) {
    try {
        let messages = await db.Message.find()
            .sort({createdAt: 'desc'})
            .populate('user', {
                username: true,
                profileImageUrl: true
            });
        return res.status(200).json(messages);
    } catch(err) {
        return next(err);
    }
});

app.use(function(req, res, next) {
    let err = new Error("Not Found.");
    err.status = 404;
    next(err);
});
app.use(errorHandler);

app.listen(PORT, function() {
    let msg = `Express server listening on port ${this.address().port} in ${app.settings.env} mode.`;
    console.log(msg);
});

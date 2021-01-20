const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // gives express access to cookies
const passport = require('passport');// to tell passport to use the cookies we installed above.
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app= express();



app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // lifespan of the cookie is 30 days, converted to miliseconds
        keys: [keys.cookieKey] // this key allows us to encrypt our cookie.
    })
);

app.use(passport.initialize());
app.use(passport.session());



require('./routes/authRoutes')(app);










if(process.env.NODE_ENV === 'production'){
    //Express will serve up production assets like our main.js or main.css
    app.use(express.static('client/build'));
    
    

    //Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = 5000;
app.listen(process.env.PORT || PORT);   
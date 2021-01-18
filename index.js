const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app= express();

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'auth/google/callback'
    }, (accessToken)=>{
        console.log(accessToken);
    } )
);

app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}))



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
const express = require('express');

const app= express();



if(process.env.NODE_ENV === 'production'){
    //Express will serve up production assets like our main.js or main.css
    // app.use(express.static('client/build'));
    app.use(express.static(__dirname + '/public'));

    //Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = 5000;
app.listen(process.env.PORT || PORT);   
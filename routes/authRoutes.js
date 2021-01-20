const passport = require('passport');

module.exports = (app)=>{
    app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile', 'email',]
    }));
    
    app.get('/auth/google/callback',
     passport.authenticate('google'),
     (req, res)=>{
         res.redirect('http://localhost:3000/dashboard')
        }
     );



    app.get('/api/current_user', (req,res)=>{
        res.send(req.user)
    });

    app.get('/api/logout', (req, res)=>{
        req.logout() // passport automatically sets logout property to req object. This kills all the associated cookies.
        res.send(req.user) ;
    });


};


const express = require('express');
const app = express();
const port = 3000;

//pass json using express
app.use(express.json());
app.use(express.urlencoded({extended:false}));

let movies=[
    {
        id:1,
        title:'Inception',
        director:'christopher Nolan',
        release_date:'2018-08-16'

    },
    {
        id:2,
        title:'The Irishman',
        director:'Martin scoops',
        release_date:'2019-09-22'

    }
];
//get the movie list in form of json

app.get('/movies',(req,res)=>{
    res.json(movies)
});

//add a movie

app.post('/movie',(req,res)=>{
    const movie = req.body

    console.log(movie);
    movies.push(movie);
    res.send('movie is added to the list')

});

//search for a movie in the list

app.get('/movie/:id',(req,res)=>{
    const id = parseInt(req.params.id);

        for(let movie of movies){
            if(movie.id === id){
                res.json(movie);
                return true
            }
        }
        res.status(400).send('movie not found')
    
    
});

//delete a record in the movie

app.delete('/movie/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    movies = movies.filter((movie) =>{
        if(movie.id !== id){
            return true
        }
        return false
    });
    res.send('movie deleted')
   
})




//set the server to listen to that port

app.listen(port,() => console.log('app listening to port: '+port));
import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {DebounceInput} from 'react-debounce-input'

const SearchMovie = () => {
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

    movieService.searchById('tt0848228');
  }, [movieToSearch]);


  return (
    <div>
      <NavPanel/>
      <br></br>
      <DebounceInput
      debounceTimeout={800}
        placeholder = "Enter movie name"
        onChange={event => setMovieToSearch(event.target.value)}
        style={{fontSize:"20px",width:"300px", marginBottom:"30px", marginTop:"10px", margin:"auto", 
        display:"block", border:"2px solid", textAlign:"center", height:"50px"}}/>
      <br></br>
      {!!movies?.movies.length &&
            movies?.movies.map(movie => (
              <Card style={{textAlign:"center", width:"350px", margin: "auto", marginBottom:"15px"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant = "h5">
              {movie.title}
              <br></br>
              {movie.year}
            </Typography>           
          </CardContent>
            <CardMedia>
              <img src={movie.poster} alt="poster"></img>
              <br></br><br></br>
          </CardMedia>               
        </CardActionArea>
      </Card>
          )
        )
      }
    </div>
  );
};

export default SearchMovie;
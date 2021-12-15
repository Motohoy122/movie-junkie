import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import styles from './GenreSelector.module.css';

const GenreSelector = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const url = 'https://api.themoviedb.org/3/';
    let genreList = 'genre/movie/list?';
    const apiKey = 'api_key=9c26259238284c8b06b0883b80e44b46';
    // console.log(fetchUrl);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(url + genreList + apiKey)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            setIsLoaded(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className={styles.container}>
              <h3>What genre of film do you wish to watch? </h3>
              <form onSubmit='{this.handleSubmit}'>
                {
                  items.genres.map(item => (
                    <div className={styles.radio}>
                      <input type='radio' name='choice' key={item.id} id={item.name}/>
                      <label for={item.name}>{item.name}</label> 
                    </div>
                  ))     
                }
                <div className={styles.formFooter}>
                  <Button onClick=''  variant="contained">Next</Button>
                </div>
                    
              </form>
            </div>   
        );
      }  
}

export default GenreSelector
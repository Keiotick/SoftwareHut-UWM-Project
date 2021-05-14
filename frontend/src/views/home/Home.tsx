import React from 'react';
import NavPanel from '../../components/NavPanel';
import movieService from '../../services/movies.service';
//import { omdApiKey } from '../../key';
//import http from '../../utulis/http';

const Home = () => {
    const [search, setSearch] = React.useState('harry potter');
    const [movie, setMovie] = React.useState({});

    /*
    React.useEffect(() => {
        const makeRequest = asynq () => {

        try{
            const responce = await fetch(`http://www.omdbapi.com/?apikey=${omdApiKey}&s=harry+potter&plot=full`).then(resp => resp.json());
            console.log(responce);
        }
        catch (error){
            console.log(error);
        }

        };
        makeRequest();
    },[search]);
    */



    React.useEffect(() => {
        const makeRequest = async () => {
            try {

            const responce = movieService.searchByName(search,1);
            
            setMovie(responce);
            }catch(error){
                console.log(error);
            }
        };
        makeRequest();
    }, [search]);
   return (
        <div> 
            <NavPanel />
            <div>This is home page</div>
        </div>
    );
}
export default Home;
import axios from 'axios';


//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grades-api-rv.herokuapp.com:8080',
  headers: {
    'Content-type': 'application/json',
  },
});

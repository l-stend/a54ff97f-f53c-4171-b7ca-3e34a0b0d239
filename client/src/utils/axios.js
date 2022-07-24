import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://tlv-events-app.herokuapp.com/events/uk/london',
});

export default customFetch;

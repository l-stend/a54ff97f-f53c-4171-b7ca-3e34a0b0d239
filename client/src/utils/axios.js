import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://tlv-events-app.herokuapp.com/events/uk/london',
  headers: {
    Accept: 'application/json',
  },
});

export default customFetch;

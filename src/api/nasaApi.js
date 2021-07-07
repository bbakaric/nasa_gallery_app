import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=e6pEd9cMry7LSfbJw2upm8tDSKBX0zpUCC0V14c1&earth_date=2015-6-3'
});
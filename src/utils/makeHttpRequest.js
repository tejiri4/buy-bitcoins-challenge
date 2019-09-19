
import axios from 'axios';

const makeHttpRequest = ({ url, method, body }) => axios({
  url,
  method: method || 'GET',
  data: body,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
}).then((response) => response.data);

export default makeHttpRequest;

import { post } from 'jquery';
import ServerActions from './actions/ServerActions';
let API = {
  fetchLinks() {
    // use ajax request to get the data
    post('/graphql', {
      query: `{
        links {
          _id,
          title,
          url
        }
      }`
    }).done(res => {
      ServerActions.receiveLinks(res.data.links);
    })
  }
};

export default API;

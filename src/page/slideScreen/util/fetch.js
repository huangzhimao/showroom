
import axios from 'axios';

export function proxyRequest(actionName) {
  axios({
    method: 'get',
    url: `http://127.0.0.1:3001/send?action=${actionName}`,
  }).then((resp) => {
    console.log(resp);
  }, (err) => {
    console.log(err);
  });
}

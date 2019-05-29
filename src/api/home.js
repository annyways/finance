import axios from 'axios'

export function getHomeInfo() {
  axios.get('/mockapi/home.json').then( (res) => {
    return Promise.resolve(JSON.parse(JSON.stringify(res.data)))
  })
}

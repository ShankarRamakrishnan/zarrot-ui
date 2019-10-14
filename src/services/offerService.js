import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: 'http://www.mocky.io/v2/',
  timeout: 1000,
  headers: {'Content-type': 'application/json'}
})

var offerPromise = axiosInstance.get('/5da4c1eb3500006d004a78d2').then(function (value) {
  console.log(value.data)
  return value.data
})

export default offerPromise

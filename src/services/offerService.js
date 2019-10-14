import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: 'http://www.mocky.io/v2/',
  timeout: 1000,
  headers: {'Content-type': 'application/json'}
})

var offerPromise = axiosInstance.get('/5da4b0b63500006d004a78a2').then(function (value) {
  console.log(value.data)
  return value.data
})

export default offerPromise

const http = require('http')
const url = 'http://nodeprogram.com'
http.get(url, (response) => {
    // declare buffer variable
    let rawData = ''
    response.on('data', (chunk) => { 
        rawData += chunk
    })
    response.on('end', () => {
        console.log(rawData)
    })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})

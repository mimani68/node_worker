var { createWorker } = require('./worker');

var payload = {
    income: 20
}

createWorker(payload, './service.js')
    .then( data => {
        console.log(`income:${ payload.income }, with tax: ${ data.result }`)
    }).catch( err => {
        console.error( err )
    });

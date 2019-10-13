const { workerData, parentPort } = require('worker_threads')
const { income } = workerData;

parentPort.postMessage({ result: calcTax(income) })

function calcTax( value ) {
    return value * 1.3
}

const { Worker } = require('worker_threads')

function createWorker( value, source ) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(source, { workerData: value });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

module.exports.createWorker = createWorker
const spawn = require('child_process').spawn;
const fs = require('fs')

module.exports = {
    get_recharge: function (lat_a, long_a, lat_b, long_b, autonomie) {
        output = '';

        const childPython = spawn('python3', ["./clientSoap.py",
            lat_a,
            long_a,
            lat_b,
            long_b,
            autonomie
        ]);

        childPython.stdout.on('data', (data) => {
            console.log("coucou")
        })

        const buffer = require('./buffer.json')

        return buffer




        // return new Promise((resolve, reject) => {
            // childPython.stdout.on('data', (data) => {
            //     output += data.toString()
            //     console.log(data.toString())
            //     // resolve(output)

            // })
            // childPython.stdout.on('error', (error) => {
            //     console.log(error)
            //     // reject(error)
            // })
        // })
    }

}

const spawn = require('child_process').spawn;

module.exports = {
    get_recharge: function (lat_a,long_a,lat_b,long_b,autonomie){
	output = '';
	
        const childPython = spawn('python3', ["./clientSoap.py",
            lat_a,
            long_a,
	    lat_b,
            long_b,
            autonomie
            ] );

        childPython.stdout.on('data', (data) => {
            output += data.toString()
        })

	return output

    }
}

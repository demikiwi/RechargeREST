var soap = require('soap');
var url = 'http://127.0.0.1/';

// const EasySoap = require('easysoap');

// const params = {
//     host: '127.0.0.1',
//     path: '/',
//     wsdl: '/?wsdl',
//  }

//  var soapClient = EasySoap(params);

var soapHeader = 'Array or Object'//xml string for header

// const soapRequest = require('easy-soap-request');

module.exports = {
    get_recharge: function (lat_a,long_a,lat_b,long_b,autonomie){

        // soapClient.getAllFunctions()
        //     .then((functionArray) => { console.log(functionArray); })
        //     .catch((err) => { throw new Error(err); });

        // soapClient.getMethodParamsByName('tempsParcours')
        //     .then((methodParams) => {
        //        console.log(methodParams.request);
        //        console.log(methodParams.response);
        //      })
        //      .catch((err) => { throw new Error(err); });

        // return soapClient.call({
        //     method    : 'tempsParcours',
        //     attributes: {
        //         soap:encodingStyle="URI"
        //      },
        //     params: {
        //         lat_a,
        //         long_a,
        //         lat_b,
        //         long_b,
        //         autonomie
        //     }
        // })

        soap.createClient(url, function(err, client){
            client.addSoapHeader(soapHeader);
          
            var args = {
                lat_a,
                long_a,
                lat_b,
                long_b,
                autonomie
            };
          
            client.tempsParcours(args, function(err, result){
             if(err){
               throw err;
             }
             console.log(result);
            });
          });


    }
}
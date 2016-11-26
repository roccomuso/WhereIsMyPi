/*
* Written by Rocco Musolino - hackerstribe.com
*/ 

var async = require('async');
var arp = require('node-arp');
var ip = require("ip");
var Spinner = require('cli-spinner').Spinner;

var my_ip = ip.address();
var LAN = my_ip.substr(0, my_ip.lastIndexOf('.')); // get Local Area Network to scan
var macSignature = new RegExp('cc:79:cf', 'i'); // for Chip (getchip.com)

var spinner = new Spinner('Scanning... %s');
spinner.setSpinnerString('|/-\\');

var result = [];

async.series([
	function(callback){
		// Console Spinner
		spinner.start();
		callback(null, 'ok');
	},
    function(callback){
        // Scan over a range of IP addresses and get every MAC address
		var count = 0;
		for(var i=1; i <=255; i++){
		    var ip = LAN+'.'+i;
		    (function(ip, i){ // self executing function
		        arp.getMAC(ip, function(err, mac) {
		            if (!err && mac) {
		                if (mac.match(macSignature))
		                    result.push('IP: '+ip+' - MAC Address: '+mac);
		            }
		            if ((++count) > 254) callback(null, 'ok');
		        });
		    })(ip, i);
		}
    },
    function(callback){
        spinner.stop(true); // stop spinner and clear console.
        // print results
		console.log((result.length === 0) ? 'Nothing found!' : result.join('\n') );
        callback(null, 'ok');
    }
]);

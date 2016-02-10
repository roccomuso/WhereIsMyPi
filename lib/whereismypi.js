/*
* Written by Rocco Musolino - hackerstribe.com
*/ 

var arp = require('node-arp');
var ip = require("ip");

var my_ip = ip.address();
var LAN = my_ip.substr(0, my_ip.lastIndexOf('.')); // get Local Area Network to scan

// Scan over a range of IP addresses and get every MAC address
for(var i=1; i <=255; i++){
    var ip = LAN+'.'+i;
    (function(ip){ // self executing function
        arp.getMAC(ip, function(err, mac) {
            if (!err) {
                if (mac.indexOf('b8:27:eb:') == 0)
                    console.log('IP: '+ip+' - MAC Address: '+mac);
            }
        });
    })(ip);
}
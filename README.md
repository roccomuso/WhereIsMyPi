# WhereIsMyPi

Node.js module to find IP Addresses of all the RPi on the LAN.

## Install

    npm install -g whereismypi

## Usage

    > whereismypi
    IP: 192.168.1.111 - MAC Address: b8:27:eb:0d:f1:c4

## How it works

It scans the current subnet looking for hosts with a MAC Address starting with <code>b8:27:eb</code> (Raspberry Pi Foundation identifier).

## Author

- Rocco Musolino
- [hackerstribe.com](http://www.hackerstribe.com)

## Inspired by

This is a Node.js porting of the dlion 'go' implementation: [dlion/WhereIsMyPi](https://github.com/dlion/WhereIsMyPi)

## License

MIT © Rocco Musolino

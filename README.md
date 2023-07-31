# WhereIsMyPi <span class="badge-patreon"><a href="https://patreon.com/roccomuso" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>

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

## Inspired by

This is a Node.js porting of the dlion 'go' implementation: [dlion/WhereIsMyPi](https://github.com/dlion/WhereIsMyPi)

## License

MIT © Rocco Musolino

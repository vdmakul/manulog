#!/bin/bash

cd /var/www/manulog

if [ ! -d /var/www/manulog/node_modules ]; then
  npm cache clean -f  &&  npm install
fi;

npm start

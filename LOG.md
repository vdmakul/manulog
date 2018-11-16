# Logs 

Main idea is to write some logs to have stm for testing the manulog format

## Project bootstrap

```ng new namulog --routing```


## Add docker support

```docker-compose up```
```docker-compose exec manulog-service bash```
```docker-compose down```

The best article to setup docker on Win10 + WSL https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly


## Use Material design

```ng add @angular/material```
```ng g m common/monule/material```


## Preview markdown

Goog library for markdown preview, simple and lightweght: https://jfcere.github.io/ngx-markdown/
```npm install ngx-markdown```


## Building UI

### Make the textarea autoresize

The quickest way to make textarea to resize was inlude another dependency
`npm install ngx-autosize` 

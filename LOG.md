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

### Creating inline editable article title

Didn't manage to easily create inline title edit.


## Making the auth

Github REST API v3 gives an opportunity to use basic auth with pre-generated personal api tokens. These tokens are used for auth.
Personal auth tokens can be generated on page https://github.com/settings/tokens 
Manual how to access user info https://developer.github.com/v3/#oauth2-token-sent-in-a-header

## Writing tests

### Karma test fails to stop while failing
 `ng test` does not stop and shows ` Executed 30 of 19 (9 FAILED)` an keeps counting. 
 I have tries to setup project in Intellij IDEA, which give me another bug with setup. 
 
 `Error: The '@angular-devkit/build-angular/plugins/karma' karma plugin is meant to be used from within Angular CLI and will not work correctly outside of it.`
 This is resolved by setting Karma package as `@angular\cli` - https://github.com/angular/angular-cli/issues/10703
 
 
 Intellij IDEA can run single test,  shows logs with test fails correctly, does ont manually repeats the test again and again (only by `Alt+Shift+R`)      

## Other useful links
on Intellij iDEA
Great article to create logger for angular: https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/

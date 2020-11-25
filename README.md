# Heroku-ready Express / React app with nginx

## Steps

1. Clone repo
2. Run in terminal,

```
heroku login
heroku create
git add .
git commit -am "initial commit"
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git
git push heroku master
```

[Reference here](https://developer.okta.com/blog/2020/06/24/heroku-docker-react)

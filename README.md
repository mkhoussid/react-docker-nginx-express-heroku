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

## Deploy Your Docker + React App to Heroku

First, log in to the Container Registry.

```
heroku container:login
```

Then, create a new app.

```
heroku create
```

Add the Git URL as a new remote to your app.

```
git remote add docker https://git.heroku.com/<your-app-name>.git
```

Then, push your Docker image to Heroku’s Container Registry.

```
heroku container:push web --remote docker
```

Once the process has completed, release the image of your app:

```
heroku container:release web --remote docker
```

And, open the app in your browser:

```
heroku open --remote docker
```

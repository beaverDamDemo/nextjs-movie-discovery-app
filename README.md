# Nextjs movie discovery app

### A list of any requirements I could not implement

- light/dark theme would need to be re-done from scracth

### Issues faced during the implementation

- params passed to single movie kept not being correct
- dropdown and button styles not working well with dark theme
- if use 'use client' in component, then the bearer token for the API is empty

### What you would improve if you had more time.

- light-dark theme not working correctly
- tests

## Getting Started

- ~~rename env.local.example to .env.local~~

When running docker container, no need to do that, .env.local is already within the container.
It is however possible to pass the .env file thru command line into the container, but with current setup is not needed.
The `env.local.example` file is not needed at this point. It can be useful because it's in git.

### Build image locally.

Image is not published on docker hub.

```bash
docker build -t nextjs-movie-discovery-app .
```

and run it

```bash
docker run -p 3000:3000 nextjs-movie-discovery-app
```

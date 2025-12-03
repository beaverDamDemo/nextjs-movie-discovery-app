# A list of any requirements I could not implement

- light/dark theme would need to be re-done from scracth

# Issues faced during the implementation

- params passed to single movie kept not being correct
- dropdown and button styles not working well with dark theme
- if use 'use client' in component, then the bearer token for the API is empty

# What you would improve if you had more time.

- light-dark theme not working correctly
- tests

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

rename env.local.example to .env.local

### Build image locally.

Image is not published on docker hub.

```bash
docker build -t nextjs-movie-discovery-app .
docker run -p 3000:3000 nextjs-movie-discovery-app

```

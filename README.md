# Sky Sail Cars

**Demo Project for a fictional car rental startup**

## Info

This project is a demo project for a fictional car rental startup. It is based on the [Nuxt3](https://nuxt.com/)
framework. As a CSS framework it uses [POSTCSS](https://postcss.com/) ＆ [Tailwind CSS](https://tailwindcss.com/) for
styling.
It is fully responsive and uses the [Vite](https://vitejs.dev/) build tool.
The entire project is written in [TypeScript](https://www.typescriptlang.org/).

Environment variables are stored in `.env` files. Please take a look at `.env` for a list of required variables.
There are no nothing that should not be exposed yet.

Work in progress last updated: 2023-12-22 09:50

## Observations

💥 CORS issue related to api endpoint

```json
"Access-Control-Allow-Origin": "localhost"
```

## Testing

### Component Testing VITEST

1. Missing implementation
2. Write test suits for the given test

## Feature Suggestion

1. Searching through api store data in session
2. Searching local (is implemented already through saving data to local storage short-term solution ✅) could be
   implemented with PWA
3. Infinite Scroll OR Pagination (Pagination through query params)
4. If Infinite Scroll Virtual list to prevent exessive Dom overload

## Thoughts

App follows the FLEX mythology to work from one single source of truth. It should be split up domain driving. There
should be a option store defined for the search, since we can use the build in api exposed by pinia

```ts
const store = useOptionStore()
store.$reset();
store.$forceUpdate()
```

The setup store should be used for coupled stores. Since we can access each store instance inside the given scope.

## Setup

Make sure to install the dependencies via YARN package manager.

```bash
# yarn
yarn install
```

## Environements

... not yet implemented

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## IDE

Developed via Webstorm

1. Launch files create them yourself or contact me

## Live View

### Production

🔗️ [Link]('https://google.com')

### Development

🔗️ [Link]('https://google.com')

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview

# bun
bun run preview
```

## Features

Please take a look at git history for exact listing.

1. v0.0.1 - Initial setup
2. v0.02 - ....
3. ... sorry there was not enough time to plan that in advance
4. v.1.00 MVP

## Contributers

Thanks to API providers
🔗️ [CommonShare]('https://google.com')

Developers
🔗️ [BenTec]('https://github.com')

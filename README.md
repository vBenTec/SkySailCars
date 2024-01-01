# Sky Sail Cars

**Demo Project for a fictional car rental startup**

## Info

This project is a demo project for a fictional car rental startup. It is based on the [Nuxt3](https://nuxt.com/)
framework. As a CSS framework it uses [POSTCSS](https://postcss.com/) ＆ [Tailwind CSS](https://tailwindcss.com/) for
styling.
It is fully responsive and uses the [Vite](https://vitejs.dev/) build tool.
The entire project is written in [TypeScript](https://www.typescriptlang.org/).

## ⚠️ Important
Nitro handles the API calls and the data fetching.
The API is not CORS enabled and therefore the client cannot access the API directly.

### ✅ Client to Server with API
```plaintext
   +---------+        +---------+        +---------+
   |         |        |         |        |         |
   | Client  +------->| Nitro   +------->|   API   |
   |         |        |         |        |         |
   +---------+        +---------+        +---------+
```

### 💥 Original implementation Client to API (CORS issues)

```plaintext
   +---------+        +---------+
   |         |        |         |
   | Client  +------->|   API   |
   |         |        |         |
   +---------+        +---------+
```

## Testing

### Component Testing VITEST

1. Missing implementation
2. Write test suits for the given test

## Enhanced Feature Suggestions
1. **Optimized User Interface:**
    - **Infinite Scroll with Virtual List:**  
      Mitigate excessive DOM overload by combining Infinite Scroll with a Virtual List, ensuring optimal performance and
      responsiveness.
2. **Performance Optimization**
   - **Session Storage:**  
     Store the fetched data in the session storage to reduce the number of API calls.
3. **Static Site Generation**
   - **Pre-rendering:**  
     Pre-render the entire site to improve SEO and performance.

## Thoughts

The app follows the FLEX pattern to operate from a single source of truth. It is recommended to split it up in a
domain-driven manner. An option store should be defined for the search, utilizing the built-in API exposed by Pinia.

```typescript
const store = useOptionStore()
store.$reset();
store.$forceUpdate()
```

The automated API typing could be further refined through PRISMA or OPENAPI.

Final some UI details could be improved.


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

🔗️ [Link]('https://skycsailcars.netlify.app/')

### Staging

[//]: # (🔗️ [Link]&#40;'https://google.com'&#41;)

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

## Versions & Changelog

1. v0.0.1 - Initial setup
2. v0.0.12 - Setup dependencies
3. v0.0.13 - Base Components
4. v0.0.14 - Base Layout
5. v0.0.15 - Base Pages
6. v0.0.16 - Setup nitro API
7. v0.2.0  - List of recommended Cars
8. v0.3.0  - List of popular Cars
9. v0.4.0  - List of search Results
10. v0.5.0 - Car Detail Page
11. v0.6.0 - List of search Results
12. v0.7.0 - Pagination features for car search and list
13. v1.0 MVP

## Contributers

Thanks to API providers
🔗️ [CommonShare]('https://www.commonshare.com/')

Developers
🔗️ [BenTec]('https://bentec.dev')

# TMDB Movie App 👋

This document explains the app organization, architecture, fetching patterns, data mutations, cache and more.

## Personal Approach

I approached this project prioritizing the main features and deepening into them, so I can show my mindset. Even though I left some features out, I focused on architecture, good pattern, reusability, and UI planning and design. Hope thorugh my code I transmit my skills: to take perspective, prioritize, planning, focus and execution.

## Design

Before writing any code, I designed the app in excalidraw to have a north of how I wanted the app to look and feel.

Take a look at the [mockup](collars-challenge.png).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Navigation

The navigation uses app expo router and it's organized in 3 screens:

1. Movies Tab: First screen rendered. It's part of the bottom tabs. It shows popular and upcoming movies. Location: `/app/(tabs)/index.tsx`
2. Saved Tab: It's part of the bottom tabs. It shows saved movies for offline use. Location: `/app/(tabs)/saved.tsx`
3. Movie Details Stack: Stack screen that opens as modal. It shows details of a single movie. Location: `/app/movie/[id].tsx`

## Components

There are several reusable components that boosts UI composition. Location: `/components/`. Below there is quick summary of the main folders and components:

`movie` folder components:
* `genres.tsx`: Renders the movie genres. When `preview` is on, it displays 2 genres, otherwise all of them.
* `highlighted.tsx`: Renders duration, status and release date as columns.
* `language.tsx`: Renders the original language of a movie.
* `movie-preview.tsx`: Renders main movie information. It's composed by other components.
* `poster.tsx`: Renders the movie poster (image).
* `rating.tsx`: Renders the movie rating as stars.
* `trailers.tsx`: Renders the movie video trailers (only YouTube).

`ui` folder: It contains general purpose UI components used by many part of the app such as close button, animation, loading, error, etc.

`themed-*.tsx` components: These are components that render theme affected styles, such as text, views, etc.

## Constants

It contains all the constants of the app, organized in 3 main files:
* `api.ts`: Strings related to API requests such as URI and paths.
* `language.ts`: ISO map of languages. Used by language component.
* `theme.ts`: Theme definitions such as text colors, background and more.

## Contexts

The app uses 2 contexts organized in the following files:
* `genre-provider`: Defines context and provider for genres. The genres are fetched at starting time (first mount) and then cached in the context. This is used for rendering the genres in the lists (popular and upcoming) because those only carry genreIds (from the TMDB API).

* `saved-movies-provider.tsx`: Defined context and provider for saved movies. It works as a middleware cache between the UI and the storage (persistent). The main advantage is serving as a single source of truth among components during saving, removing, retrieving operations.

## Hooks

The app relies heavily on hooks to perform API data retrieval, storage mutations and states propagation.

The main hooks are:
* `use-color-schema.ts`: Built in RN hook. No need to document.
* `use-movie-details.ts`: Retrieves a single movie (performs an API request).
* `use-popular-movies.ts`: Retrieves a list of popular movies (first page only).
* `use-remove-movie-mutations.ts`: Removes a single movie from the storage and updates the cache.
* `use-save-movie-mutations.ts`: Saves a single movie into the storage and updates the cache.
* `use-saved-movie.ts`: Retrieves a single movie from the cache.
* `use-theme-colors.ts`: Retrieves the theme definition for a single field. Note: I did not code this hook, it was part of the expo boilerplate.
* `use-upcoming-movies.ts`: Retrieves a list of upcoming movies (first page only) starting from tomorrow and up to 60 days.

It is important to note that these hook pattern is based on [SWR from Vercel](https://swr.vercel.app/). That library was not installed to keep the app simple, but it's a good practice since it offers many production ready features.

## Utils

Utility file functions are the following:
* `api.ts`: API layer to perform requests to TMDB API. It handles Authorization, API_ACCESS_TOKEN and basic error handling. It is meant to be used from hooks.
* `functions.ts`: Set of general purpose functions such as format a date.
* `storage.ts`: Set of storage functions that bridge the AsyncStorage and provide movie operations such as save, remove, get and getAll. It is used by `saved-movies-provider.tsx` and related hooks.

## What features are included

* Popular movies
* Upcoming movies (tomorrow and up to 60 days)
* Saved for offline usage
* Detailed movie screen
* Displays: rating (stars), original language, genres, duration, status, release date, synopsis
* Play movie trailers
* Support for light and dark mode

## What's not included

Due to time constraints the following features were not developed:

* Search bar
* Save movies into the TMDB API
* More filters such as country, language, ratings, etc

Also, the following features are needed for a real world app (just to name a few):

* Error tracking and reporting (eg. Sentry)
* Performance tracking
* Analytics (understand how the users are using the app)
* More types coverage
* More error handling and custom messages
* Automated testing (especially for critical features)
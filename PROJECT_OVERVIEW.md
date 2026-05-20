# Dunia's Portfolio - Project Overview

## Project Summary

This is a Vue 3 + Vite portfolio website configured for GitHub Pages. The app is organized as a single-page portfolio with one main route (`HomeView`) and a lazy-loaded secondary route (`AboutView`). The core app shell is `App.vue`, which provides navigation and rendering for route content.

---

## Root files

### `package.json`
- Defines project metadata and scripts.
- Important scripts:
  - `npm run dev` → starts Vite dev server.
  - `npm run build` → creates production build.
  - `npm run preview` → previews built app.
  - `npm run test:unit` → runs Vitest.
  - `npm run deploy` → deploys `dist/` to GitHub Pages.
- Dependencies:
  - `vue`
  - `vue-router`
- Dev dependencies:
  - `vite`
  - `@vitejs/plugin-vue`
  - `@vitejs/plugin-vue-jsx`
  - `vitest`
  - `@vue/test-utils`
  - `jsdom`
  - `gh-pages`

### `vite.config.js`
- Configures Vite with Vue support.
- Sets `base: '/Dunia-s-Portfolio/'` for GitHub Pages hosting.
- Adds alias `@` to `./src`.

### `vitest.config.js`
- Extends the Vite configuration for testing.
- Uses `jsdom` environment.
- Excludes default Vitest exclusions and `e2e/*`.
- Sets root to the project directory.

### `README.md`
- Contains generic starter instructions for Vue and Vite.

### `index.html`
- The app entry HTML file.
- Loads Google fonts and Font Awesome kit.
- Mounts the Vue app via `/src/main.js`.

### `public/`
- `favicon.ico` used by the browser.

---

## `src/` application structure

### `src/main.js`
- Bootstrap file for the Vue application.
- Imports `App.vue`, router, and `./assets/main.css`.
- Creates the Vue app, installs router, and mounts it to `#app`.

### `src/router/index.js`
- Defines routing for the app.
- Uses `createWebHistory(import.meta.env.BASE_URL)`.
- Adds `scrollBehavior` for smooth hash scrolling.
- Routes:
  - `/` → `HomeView.vue`
  - `/about` → lazy-loaded `AboutView.vue`

### `src/App.vue`
- Root layout and navigation shell.
- Contains desktop and mobile navigation menus.
- Navigation links use `RouterLink` and smooth scrolling to section IDs.
- Manages mobile menu state with `shownav`.
- Includes a theme toggle method that stores mode in `localStorage`, though the UI toggle is currently inactive.
- Renders route content with `<RouterView :scrollToSection="scrollToSection" />`.

#### Notes
- `className` is used in many Vue template elements, but Vue template syntax expects `class`.
- Passing `:scrollToSection` into `RouterView` is not the standard way to pass props to route components.

---

## Views

### `src/views/HomeView.vue`
This is the central page of the portfolio.

#### Imported components
- `HelloWorld.vue`
- `TheWelcome.vue`
- `MyhomeView.vue`
- `AboutmeView.vue`
- `TechstackView.vue`

#### Imported assets
- Project images and animations (e.g. `rr.gif`, `tix.gif`, `annagif.gif`, etc.)
- Graphic design images `image1.jpg` through `image6.jpg`

#### Key data and state
- `carouselSlides`: array of project showcase objects.
- `Allgraphics`: array of graphic design image objects.
- `isshow`, `isshoww`, `isshowww`: booleans to choose visible content sections.
- `selectedItem`: currently selected category.
- `list`: category labels.

#### Methods
- `toggleone()`, `toggletwo()`, `togglethree()`: switch display sections.
- `selectItem(item)`: logs the selected category.

#### Template structure
- `<Myhome />` hero section.
- Project highlight section with item carousel.
- `<Aboutme />` and `<Tech />` sections.
- Contact and social links.
- Personal info block.

#### Notes
- The page is mostly anchor-based section navigation.
- `HelloWorld.vue` provides carousel controls and exposes the current slide index via slot props.
- There is a lot of commented-out experimentation code.

### `src/views/AboutView.vue`
- Empty template and styling.
- Route exists but renders nothing currently.

---

## Components

### `src/components/MyhomeView.vue`
- Hero section with introduction, buttons, and hero image.
- Contains its own `scrollToSection()` helper.
- Uses `RouterLink` to anchor `#projects` and scrolls to `section2`.
- Includes a CSS-heavy style block for layout, animations, and responsive behavior.

### `src/components/AboutmeView.vue`
- About section with text and personal profile image.
- Contains a small gallery of three imported images.
- Uses flex layout for desktop and block layout for mobile.

### `src/components/TechstackView.vue`
- Technology skills section.
- Displays tech icons and descriptive text.
- Includes responsive icon sizing for small screens.

### `src/components/HelloWorld.vue`
- Carousel controller component.
- Uses `ref` and `onMounted` to count `.omo` elements and track current image index.
- Defines `next()` and `prev()` navigation.
- Renders a default slot with `:myimg="currentimage"`.

### `src/components/TheWelcome.vue`
- A simple slot wrapper inside a transition.
- Provides a transition wrapper around child slide content.

### `src/components/WelcomeItem.vue`
- Empty file.
- Not currently used.

### `src/components/__tests__/HelloWorld.spec.js`
- A basic Vitest unit test.
- Mounts `HelloWorld.vue` and checks for placeholder text.
- Likely a placeholder test and may not match current component output.

---

## Assets

### `src/assets/main.css`
- Imported by `main.js`.
- Currently empty.

### `src/assets/base.css`
- Contains global CSS variables, resets, and body styling.
- Not imported anywhere in the app, so it is unused.

### `src/assets/images/`
- Contains all image assets used by the site:
  - personal images (`dunia.png`, `alexone.jpg`, etc.)
  - project screenshots and GIFs (`rr.gif`, `tix.gif`, etc.)
  - icons (`github.png`, `mail.png`, `react.png`, etc.)

---

## Application flow

1. `index.html` loads the Vue app and fonts.
2. `src/main.js` bootstraps Vue and installs the router.
3. `App.vue` renders navigation and the router outlet.
4. The router loads `HomeView.vue` on `/`.
5. `HomeView.vue` displays the hero, project carousel, about section, tech skills, and contact area.
6. Navigation links scroll to anchored section IDs.
7. `npm run build` bundles the site to `dist/`.
8. `npm run deploy` publishes the built site to GitHub Pages.

---

## Important caveats and notes

- `className` is used in Vue templates, but Vue expects `class`.
- `AboutView.vue` is present but empty.
- `base.css` is not imported, so its styles are unused.
- `main.css` is imported but empty.
- `WelcomeItem.vue` is not used.
- The router passes `:scrollToSection` to `RouterView`, which is not standard.
- The carousel logic uses DOM queries and may be brittle.

---

## Recommended next steps

1. Replace `className` with `class` in Vue templates.
2. Import `base.css` or move global styles into `main.css`.
3. Fill out `AboutView.vue` or remove the unused route.
4. Clean unused component files like `WelcomeItem.vue`.
5. Simplify carousel logic to use Vue state instead of DOM queries.
6. Fix route prop passing if section scrolling should work via route components.
7. Validate or update the unit test to match the actual component.

---

## Folder structure at a glance

- `index.html`
- `package.json`
- `vite.config.js`
- `vitest.config.js`
- `README.md`
- `public/`
  - `favicon.ico`
- `src/`
  - `main.js`
  - `App.vue`
  - `router/`
    - `index.js`
  - `views/`
    - `HomeView.vue`
    - `AboutView.vue`
  - `components/`
    - `MyhomeView.vue`
    - `AboutmeView.vue`
    - `TechstackView.vue`
    - `HelloWorld.vue`
    - `TheWelcome.vue`
    - `WelcomeItem.vue`
    - `__tests__/HelloWorld.spec.js`
  - `assets/`
    - `main.css`
    - `base.css`
    - `images/`
      - `*.png`, `*.jpg`, `*.gif`

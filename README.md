# promo-chat, by [Tincre`.dev`](https://tincre.dev/)

A chat component for Tincre [Promo](https://tincre.dev/promo). Use it in conjunction with the [`promo-dashboard`](https://github.com/Tincre/promo-dashboard) and other Promo integration applications.

- [promo-chat, by Tincre`.dev`](#promo-chat-by-tincredev)
  - [Installation](#installation)
    - [Yarn](#yarn)
    - [Npm](#npm)
    - [Environment variables](#environment-variables)
      - [`.env.local` Example](#envlocal-example)
    - [Usage](#usage)
  - [Support](#support)
  - [License](#license)
  - [Development](#development)
    - [Releases](#releases)
      - [Release prep](#release-prep)
        - [Test release](#test-release)
      - [Release `latest` tag](#release-latest-tag)

## Installation

Use your favorite package manager to rock installation of `promo-chat`.

### Yarn

```
yarn add @tincre/promo-chat# -D if you want this as a dev dep
```

### Npm

```
npm install @tincre/promo-chat # --save-dev if you want it as a dev dep
```

### Tailwindcss Setup

Make sure you add to your `tailwind.config.js` configuration file a
new element in the `content` property array.

For example,

```js
content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './src/*.{js,jsx,ts,tsx}',
  './node_modules/@tincre/promo-button/**',
  './node_modules/@tincre/promo-dashboard/**',
  './node_modules/@tincre/promo-chat/**',
],
```

> Your configuration file will likely look different from the above, depending on your source directories.

### Environment variables

You'll need the following environment variables available in Node.js:

- `PROMO_CLIENT_ID`
- `PROMO_CLIENT_SECRET`
- `PROMO_APP_ID`
- `PROMO_API_KEY` (optional)

These values can be found in the [Tincre.dev Dashboard](https://tincre.dev/dashboard)
after you're logged in and have created at least one app.

#### `.env.local` Example

```env
PROMO_API_KEY=
PROMO_CLIENT_ID=
PROMO_APP_ID=
PROMO_CLIENT_SECRET=
```

### Usage

- Import the frontend component
- Add backend functionality
- Update the backend property in your frontend from 1
- Add an environment file, e.g. .env.local
- Add environment variables to your deployment
- Deploy!

### Customize the look & feel

Just add the following classes to your tailwindcss or regular css. If
using tailwindcss, use an `@apply` directive.

```
#promo-chat-button-not-clicked
#promo-chat-container
#promo-chat-window-container
#promo-chat-header-container
#promo-chat-header-text
#promo-chat-close-chat-button
#promo-chat-close-chat-icon
#promo-chat-latest-messages
#promo-chat-input-container
#promo-chat-input-only-container
#promo-chat-text-input
#promo-chat-input-submit-button
#promo-chat-user-message-display
#promo-chat-assistant-message-display
```

### Full CSS Customization Example

The below customizations are an example of how to change the colors
of the chat interface and button to your own liking.

> _A good custom example is [Tincre](https://tincre.com)'s [b00st.com](https://b00st.com) brand button._

```css
#promo-chat-button-not-clicked {
  @apply fixed bottom-10 right-10 z-[90] flex h-16 w-16 animate-wave items-center justify-center rounded-full bg-red-900 text-2xl text-slate-50 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-red-800 hover:shadow-xl dark:bg-red-100 dark:text-red-900 hover:dark:bg-red-200;
}
#promo-chat-container {
  @apply fixed bottom-0 z-[90] w-full select-none sm:bottom-6 sm:right-6 sm:w-96;
}
#promo-chat-window-container {
  @apply w-full max-w-lg rounded-lg bg-white shadow-md;
}
#promo-chat-header-container {
  @apply flex items-center justify-between rounded-t-lg border-b bg-red-800 p-4 text-white;
}
#promo-chat-header-text {
  @apply text-lg font-semibold;
}
#promo-chat-close-chat-button {
  @apply z-[90] text-red-50 hover:text-red-200 focus:text-red-200 focus:outline-red-200 focus:ring-2 focus:ring-inset focus:ring-red-200;
}
#promo-chat-close-chat-icon {
  @apply z-[90] h-6 w-6 text-red-50 hover:text-red-200 focus:text-red-200 focus:outline-none;
}
#promo-chat-latest-messages {
  @apply h-80 overflow-y-auto p-4;
}
#promo-chat-input-container {
  @apply flex flex-col items-center border-t px-3 py-4 sm:flex-row;
}
#promo-chat-input-only-container {
  @apply w-full sm:max-w-xs;
}
#promo-chat-text-input {
  @apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6;
}
#promo-chat-input-submit-button {
  @apply mt-3 w-full items-center justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-row;
}
#promo-chat-user-message-display {
  @apply inline-block rounded-lg bg-red-700 px-4 py-2 text-white;
}
#promo-chat-assistant-message-display {
  @apply inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-700;
}
```

## Support

- Documentation: [tincre.dev/docs](https://tincre.dev/docs)
- Guides and how-tos: [tincre.dev/docs/guides](https://tincre.dev/docs/guides)
- Reference docs: [tincre.dev/docs/reference](https://tincre.dev/docs/reference)
- Community: [community.tincre.dev](https://community.tincre.dev)

## License

This code is free to use for your commercial or personal projects. It is open-source
licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).

You will see various headers throughout the codebase and can reference the license
directly via [LICENSE](/LICENSE) herein.

## Development

### Releases

We use [`npm`](https://npmjs.com) for releases. In particular, we use
`npm --publish` to publish.

Currently, only [@thinkjrs](https://github.com/thinkjrs) has the ability to release.

#### Release prep

Prior to using `npm --publish` a release tag needs to be created for
the library using our standard tagging practices.

> Ensure that tests :white_check_mark: pass during this process prior to
> releasing via npm.

##### Test release

To do a proper release, ensure you're in the base repo directory and run
`npm publish . --access public --dry-run`.

#### Release `latest` tag

To complete a full release to the `latest` npm `dist-tag`, ensure you're in
the base repo directory and run `npm publish . --access public`.

🎉 That's it! 🎉

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

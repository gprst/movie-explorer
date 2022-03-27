# Movie explorer

Efficiently browse the OMDb movie database!

## Get started

Get an API key to the Open Movie Database: http://www.omdbapi.com/apikey.aspx

Once you have had it validated, create a new `.env.local` file based on the provided `.env.sample` file:

```sh
cp .env.sample .env.local
```

Replace the `<YOUR_API_KEY_HERE>` part of your newly created `.env.local` file with *your* API key.

## Start the app

```sh
# With PNPM:
pnpm i
pnpm dev

# With Yarn:
yarn
yarn dev

# With npm:
npm i
npm run dev
```

Enjoy!

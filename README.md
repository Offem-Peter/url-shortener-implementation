# URL Shortening Service Implementation.

## How to run

Download this project, enter the project and install necessary dependencies

```sh
cd project-name
yarn install
```

Then start the server by running

```sh
yarn dev
```

You can use your favourite API tool, I recommend POSTMAN for hitting these endpoints.

### POST `/api/encode`

**Data Body:**

```ts
{
  originalUrl: urlString;
}
```

**Response:**

```ts
{
  encodedUrl: encodedString;
}
```

### POST `/api/decode`

**Data Body:**

```ts
{
  encodedUrl: encodedString;
}
```

**Response:**

```ts
{
  decodedUrl: urlString;
}
```

### GET `/api/statistic/:shortUrl`

**Response:**

```ts
{
    noOfVisit: number,
    originalUrl: urlString,
    shortUrl: encodedString
}
```

## Running TESTS

While Server is running, open a new terminal and type in

```sh
yarn test
```

# THANK You

# BOHECO 2 Bill Inquiry Client

A React-based web application that allows BOHECO 2 consumers to inquire about their electricity bill information. This client application communicates with a proxy server to securely retrieve billing details from BOHECO 2's system.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Requirements

- Install [Bun](https://bun.com/docs/installation)

## Environment Variables

The following environment variables are required:

| Variable | Description |
| --- | --- |
| VITE_API_BASE_URL | The base URL of the proxy server (e.g. http://localhost:3000) |

## Running the App

To start a development server:

```bash
bun dev
```

## Building for Production

To build the app for production:

```bash
bun run build
```

## License

This project is licensed under the **MIT License**.You are free to use, modify, distribute, and sell this software, provided that you include the original copyright notice and license terms.

See [LICENSE](./LICENSE) for full details.
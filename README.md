# Unresponsive Express.js Server

This repository demonstrates a common issue in Express.js applications where asynchronous operations within request handlers can cause the server to become unresponsive.

## Bug Description

The provided `bug.js` file contains an Express.js server with a `GET` route that performs an asynchronous operation using `setTimeout`.  This simulates a scenario like database query or external API call.  Because the response is only sent after the timeout, requests will hang until the timeout completes. This can lead to poor performance or even application crashes under heavy load. 

## Solution

The `bugSolution.js` demonstrates how to resolve this using Promises or async/await. This allows the server to continue handling other requests while waiting for the asynchronous operation to finish. 

## How to reproduce

1. Clone the repo.
2. Run `npm install`
3. Run `node bug.js`
4. Make a request to `http://localhost:3000` (you'll have to wait 2 seconds)
5. Run `node bugSolution.js`
6. Make a request to `http://localhost:3000`

Notice how the server responds immediately in the second case.
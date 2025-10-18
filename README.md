# Node.js/Express Cat Fact API

This is a simple Node.js/Express application that provides a single endpoint (`/me`) to retrieve user information along with a random cat fact fetched from the [Cat Fact API](https://catfact.ninja/). If the Cat Fact API is unavailable, a fallback message is returned.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: Version 14.x or higher
- **npm**: Node package manager (comes with Node.js)

## Installation

1. **Clone or Download the Project**

   ```bash
   git clone https://github.com/Nimroddddd/hng13-b-0.git
   ```

2. **Navigate to the Project Directory**

   Navigate to the project folder:

   ```bash
   cd hng13-b-0
   ```

3. **Install Dependencies**

   Install the required Node.js packages using npm:

   ```bash
   npm install
   ```

   This will install `express` and `axios`, which are the main dependencies for the application.

## Running the Application

1. **Start the Server**

   Run the following command to start the Express server:

   ```bash
   node index.js
   ```

   The server will start and listen on port `3000`. You should see the following message in the terminal:

   ```
   Server running on port 3000.
   ```

2. **Access the Endpoint**

   Open a web browser or use a tool like [Postman](https://www.postman.com/) or `curl` to make a GET request to the following endpoint:

   ```
   http://localhost:3000/me
   ```

   **Example Response (Success):**

   ```json
   {
     "status": "success",
     "user": {
       "email": "min123kabir@gmail.com",
       "name": "Amin Abdulkabir",
       "stack": "Node.js/Express"
     },
     "timestamp": "2025-10-18T20:28:00.000Z",
     "fact": "Cats can jump up to five times their own height in a single bound."
   }
   ```

   **Example Response (API Down):**

   ```json
   {
     "status": "success",
     "user": {
       "email": "min123kabir@gmail.com",
       "name": "Amin Abdulkabir",
       "stack": "Node.js/Express"
     },
     "timestamp": "2025-10-18T20:28:00.000Z",
     "fact": "Cat Fact API is down, please try again later."
   }
   ```

## Project Structure

- `index.js`: The main application file containing the Express server and endpoint logic.
- `package.json`: Lists the project dependencies and scripts.

## Notes

- The application uses the [Cat Fact API](https://catfact.ninja/) to fetch random cat facts. Ensure you have an active internet connection to retrieve facts.
- If the Cat Fact API is down, the application will return a fallback message in the response.
- The server runs on port `3000` by default. If you need to use a different port, update the `port` constant in `index.js`.
# Rock Paper Scissors Game - Backend

This is the backend server for the Rock Paper Scissors game, built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.example`:
   ```
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/rps-game
   ```

## Development

To start the development server:

```bash
npm run dev
```

The server will start on port 4000 (or the port specified in your .env file).

## API Endpoints

### Players

- `GET /players` - Get all players
- `GET /players/:username` - Get player by username
- `POST /players` - Create a new player
- `PUT /players/:id` - Update player stats

## Build

To build the project:

```bash
npm run build
```

## Production

To start the production server:

```bash
npm start
```

## Testing

To run tests:

```bash
npm test
```

# AP CSA/CSP Question Autosolver - Single Command Deployment

This document provides instructions for deploying and running the AP CSA/CSP Question Autosolver application with a single command.

## Project Structure

The project has been unified into a single application:
- Backend (NodeJS/Express) serves both the API and the frontend
- Frontend (React) is pre-built and included in the public directory

## Prerequisites

- Node.js (v14 or higher)
- npm or pnpm package manager

## Installation and Deployment

1. Extract the zip file to a directory of your choice

2. Navigate to the extracted directory:
   ```
   cd apcsa_question_solver
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   pnpm install
   ```

4. Start the application with a single command:
   ```
   npm start
   ```
   or
   ```
   pnpm start
   ```

5. Access the application in your browser at:
   ```
   http://localhost:5000
   ```

## Environment Variables

The application uses the following environment variables in the `.env` file:
- `DEEPSEEK_API_KEY`: Your DeepSeek API key (pre-configured)
- `PORT`: The port on which the server will run (default: 5000)

## Troubleshooting

- If you encounter issues with the DeepSeek API, check your API key in the `.env` file
- If the port 5000 is already in use, change the PORT value in the `.env` file

## Sample Questions

Sample AP CSA/CSP questions for testing are available in the included sample-questions.md file.

# React Quote Generator App

This is a simple React application that generates random quotes using the `Type.fit` API. The app uses the `useEffect` hook to fetch data from the API when the component mounts, and the `useState` hook to manage the state of the randomly generated quote and author.
Concepts Used

## Concepts Used

   - `useState` hook to manage state of quote and author
   - `useEffect` hook to fetch data from the API when the component mounts
   - `async/await` for asynchronous API requests
   - `Math.floor()` and `Math.random()` functions to generate a random index for selecting a quote from the response data
   - `onClick` event listener to trigger the `submitRequest` function and generate a new quote
   - Basic `CSS` styling to improve the appearance of the app.

## How to Run the App

To run the app, you can follow these steps:
```
    Clone this repository to your local machine
    Navigate to the project directory in your terminal
    Install the dependencies by running `npm install
    Start the app by running `npm start`
    Open `http://localhost:3000` in your browser to view the app
```
That's it! You should now be able to generate random quotes by clicking the "Generate Quote" button.
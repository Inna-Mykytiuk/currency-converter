# Currency Converter

Welcome to the Currency Converter project, designed to help users easily convert between multiple currencies with real-time exchange rates. This project was built using **React** and integrates with a public API to provide up-to-date currency data.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)

## Description

### Header with Exchange Rates

The header section of the application displays the current exchange rates for **USD** and **EUR** against **UAH** (Ukrainian Hryvnia). These rates are fetched in real-time from a public API to ensure users always have accurate and up-to-date data.

### Currency Conversion Component

The currency conversion feature allows users to convert between three currencies: **UAH**, **USD**, and **EUR**. Each currency is represented by an input field and a select dropdown.

- **Input**: Users enter a value representing the amount of the currency they wish to convert.
- **Select**: Users can choose from the available currencies (**UAH**, **USD**, **EUR**) to convert from and to.

The conversion works in both directions:

- When a value is entered in the first currency input, the second currency’s value is recalculated based on the exchange rate.
- Similarly, changes in the second input will recalculate the first currency's value.
- Switching the currency in either dropdown updates the conversion accordingly.

## Features

1. **Real-time exchange rates**: Displays the current rates for **USD** and **EUR** against **UAH**.
2. **Bidirectional currency conversion**: Allows users to convert from one currency to another and vice versa.
3. **Responsive design**: The app is mobile-friendly with a responsive layout.
4. **Interactive UI**: As users type or select different currencies, the conversion updates dynamically.
5. **API integration**: Fetches exchange rates from a public API for real-time accuracy.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Inna-Mykytiuk/confetti.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser (Note: the port may be changed if 3000 port is occupied by another website).

## Technologies Used

1. **React**: The core of this project is built with React, a powerful library for creating dynamic user interfaces.

2. **CSS**: Custom styles have been implemented using CSS to ensure a clean and intuitive user experience.

3. **Public API**: The project uses a public API to fetch real-time exchange rates for USD, EUR, and UAH.

4. **React Hooks**: The application makes extensive use of React hooks such as useState and useEffect to manage state and side effects, including fetching the exchange rates from the API.

5. **TypeScript**: Implemented for static type checking, enhancing code quality and reducing errors during development.

6. **Axios**:  
   Axios is used for making HTTP requests to the currency exchange API. It simplifies the process of fetching data and provides better error handling compared to the native `fetch` method.

![preview](https://github.com/Inna-Mykytiuk/currency-converter/blob/main/public/preview.jpg)

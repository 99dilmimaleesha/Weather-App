<<<<<<< HEAD
# Weather App

A responsive React weather application built with TypeScript and Tailwind CSS that fetches real-time weather data using WeatherAPI.com.

---

## Features

* Fetch current weather by city name.
* Displays temperature, humidity, wind speed, and weather conditions.
* Fully responsive layout (mobile, tablet, desktop).
* Beautiful background image with gradient overlay.
* Loading and error handling.

---

## Technologies Used

* React (with TypeScript)
* Tailwind CSS
* Axios for API calls
* WeatherAPI.com for weather data

---

## Folder Structure

```
src/
├── api/
│   └── weather.ts        # API call functions
├── components/
│   └── WeatherCard.tsx   # Weather UI card
├── pages/
│   └── WeatherApp.tsx    # Main screen / logic
├── assets/
│   └── weather.jpg       # Background image
├── http.ts               # Axios instance for API
└── App.tsx
```

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Add your WeatherAPI.com API key in `api/weather.ts`:

```ts
const apiKey = "YOUR_API_KEY";
```

4. Run the app:

```bash
npm start
```

---

## Usage

1. Enter a city name in the input field.
2. Click the "Search" button.
3. View current weather information including temperature, humidity, wind speed, and conditions.

---

## Customization

* Replace `weather.jpg` in `assets` with your preferred background image.
* Adjust gradient overlay opacity in `WeatherApp.tsx` for better readability.

---

## License

This project is licensed under the MIT License.


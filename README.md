# Weather App
by: Agus Dwi Milniadi

Weather app for weather check and forecast in Indonesian City

Live: [https://weather-app-adm.vercel.app/](https://https://weather-app-adm.vercel.app/)

GitHub: [https://github.com/agusdwimilniadi/weather-app](https://github.com/agusdwimilniadi/weather-app)

---

## Features

This weather app includes:

1. Realtime API Weather from [https://openweathermap.org/api](https://openweathermap.org/api)
2. Display current weather, temperature, condition and location
3. Search City in Indonesia by Name
4. Manual refresh to get newest data
5. Switcher from Celsius to Farenheit
6. Historical data search
7. Reorder Historical data by Dragable
8. Responsive mobile phone
9. Forecast next few days weather
10. Forecast newt few days for temperature



---

## Tech Stack

- NextJS 15 Typescript App Router
- Redux + Persist for State Management
- Axios for data fetching
- TailwindCSS
- Atomic Design Methodology for Components concept
- Weather API from : [https://openweathermap.org/api](https://openweathermap.org/api)
- Docker


---

## Project Structure

```bash
public/                          # Static assets served directly (e.g., favicon, images)
app/                             # Next.js App Router root
├── favicon.ico                  # Favicon for the application
├── globals.css                  # Global CSS styles (likely TailwindCSS)
├── layout.tsx                   # Root layout component for the application
└── page.tsx                     # Root page component (e.g., homepage)
components/                      # Reusable UI components
│   ├── atoms/                   # Small, independent UI elements
│   ├── molecules/               # Combinations of atoms
│   └── organism/                # Combinations of molecules and atoms, forming distinct sections
hooks/                           # Custom React hooks
│   └── useDragAndDrop.tsx
lib/                             # Utility functions, API configurations, and shared logic
│   ├── api/                     # API related files
│   │   └── AxiosInstance.ts     # Axios configuration for API requests
│   ├── provider/                # Context providers
│   │   └── Provider.tsx         # Global context provider
│   └── redux/                   # Redux store and slices for state management
│       ├── slice/
│       │   ├── searchData/
│       │   │   └── recentSearchSlice.ts # Redux slice for recent search data
│       │   └── weatherData/
│       │       ├── action.ts            # Redux actions for weather data
│       │       ├── currentWeatherSlice.ts # Redux slice for current weather data
│       │       └── interface.ts         # TypeScript interfaces for weather data
│       └── store.ts             # Redux store configuration
utils/                           # General utility functions
│   └── CelsiusToFahrenheit.ts  # Utility for temperature conversion
.dockerignore                    # Files and directories to ignore when building Docker images
.env                             # Environment variables (local)
.env.example                     # Example environment variables
.eslintrc.cjs                    # ESLint configuration
.gitignore                       # Files and directories to ignore in Git
docker-compose.yml               # Docker Compose configuration for multi-container Docker applications
Dockerfile                       # Dockerfile for building the application's Docker image
next-env.d.ts                    # TypeScript declaration file for Next.js environment variables
next.config.ts                   # Next.js configuration file
package-lock.json                # Locked dependencies for consistent installs
package.json                     # Project metadata and dependencies
postcss.config.mjs               # PostCSS configuration
README.md                        # Project README file
tsconfig.json                    # TypeScript configuration
```

---
## Getting Started – Run Locally:

Getting Started – Run Locally:

1. Clone the project:
```bash
git clone https://github.com/agusdwimilniadi/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

3. Create .env file:
```bash
cp .env.example .env
```

4. Fill your api key and weather API URL
```bash
NEXT_PUBLIC_WEATHER_API_KEY="Your_WeatherKeyAPI"
NEXT_PUBLIC_WEATHER_API_URL="yoururl.com"
```

5. Start development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

App runs at http://localhost:3000

---
## Run with Docker:
If you have Docker and Docker Compose installed, you can run the application using the provided Dockerfile and docker-compose.yml.


1. Ensure your `.env` file is configured as described in step 4 of the "Getting Started – Run Locally" section, as Docker will use these environment variables during the build process:

2. Build and run the Docker containers:
```bash
docker-compose up --build
```

3. Access the application:
Once the containers are up and running, the application will be available at [http://localhost:3000](http://localhost:3000) in your web browser.

4. If you want to stop type
```bash
docker-compose down
```


---
## Thankyou



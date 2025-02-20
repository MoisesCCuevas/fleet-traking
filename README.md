# Fleet Tracking System

## Overview
The Fleet Tracking System is a project designed to monitor and manage a fleet of vehicles. It provides real-time tracking, route optimization, and maintenance scheduling to improve efficiency and reduce operational costs.

## Features
- **Real-time Tracking**: Monitor the location of each vehicle in real-time.
- **Route Optimization**: Calculate the most efficient routes for each vehicle.
- **Reporting**: Generate detailed reports on vehicle usage, fuel consumption, and more.

## Installation
To install the Fleet Tracking System, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/MoisesCCuevas/fleet-traking.git
    ```
2. Navigate to the project directory:
    ```sh
    cd fleet-tracking
    ```
3. Install the dependencies:
    ```sh
    npm install --legacy-peer-deps
    ```
4. Create and .env file:
   ```
   # Secret key to encrypt your session. Generate a new one by running `openssl rand -base64 32`
   SESSION_SECRET=
   # Public base URL
   NEXT_PUBLIC_API_BASE_URL=
   # apiKey from Google Maps Services
   GOOGLE_API_KEY=
   ```
5. Create a mockUsers.json file at getLogin path to used as valid users, using the following structure
   ```
   {
     "users": [
       {
         "username": "test.user@mail.com",
         //hash login password (hex). Use https://hash.online-convert.com/es/generador-sha256
         "password": "5994471ABB01112AFCC18159F6CC74B4F511B99806DA59B3CAF5A9C173CACFC5"
       }
     ]
   }
   ```


## Usage
To start the application, run:
```sh
npm run start
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

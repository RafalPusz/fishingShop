# Rafał Pusz – FishingShop 🎣

## Description
**FishingShop** is a React-based web project designed as a mock online fishing store.  
It features an interactive Google Map with a company location marker and navigation link, as well as a modern, responsive layout.  
This project demonstrates front-end development skills using React, component-based architecture, and integration with external APIs.

## Languages and Utilities Used
- **React 18** – frontend framework
- **JavaScript (ES6+)**
- **CSS Modules** – scoped component styles
- **Google Maps API** – interactive map
- **@vis.gl/react-google-maps** – map visualization
- **@react-google-maps/api** – Google Maps integration
- **React Router (`NavLink`, `Routes`, `useLocation`)** – routing and navigation
- **React Icons** – icons for UI (footer, navbar, profile)
- **Custom Hooks / Services** – e.g., `ScrollToTop` component



## Environments Used
- **Windows 11**
- **Visual Studio Code**
- **Node.js + npm**

## Program Walk-through

<p align="center">
Homepage view: <br/>
<img src="" height="80%" width="80%" alt="FishingShop Home"/>
<br /><br />
Company location map: <br/>
<img src="" height="80%" width="80%" alt="FishingShop Google Map"/>
<br /><br />
Example product layout: <br/>
<img src="" height="80%" width="80%" alt="FishingShop Products"/>
</p>

## Features
- 🌍 Interactive Google Map with company marker  
- 📱 Responsive layout  
- ⚙️ Environment variables for API key management (`.env` file)  
- 💡 Component-based React architecture  
- 🧭 One-click navigation to company location (Google Maps directions)

## Usage
1. Clone this repository  
   ```bash
   git clone https://github.com/RafalPusz/fishingShop.git
   ```
2. Navigate to the project directory
   ```bash
   cd fishingShop
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Create a .env file in the project root and add your Google Maps API key
   ```ini
   REACT_APP_API_KEY=YOUR_API_KEY_HERE
   REACT_APP_API_MAPID=YOUR_MAP_ID
   ```
⚠️ Make sure .env is listed in .gitignore to avoid committing your API keys.

5. Start the development server
   ```bash
   npm start
   ```
6. Open http://localhost:3000 in your browser

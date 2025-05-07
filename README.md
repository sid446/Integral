# ✈️ Travel Planner App

A modern travel planning application built with **React**, using **tailored components, responsive design**, and **Google Places API** integration for searching places.  
It includes multiple screens: Home, Profile, Travel Plan, and a dynamic Search feature.

---

## 🚀 Features

✅ Personalized travel plan creation  
✅ View upcoming trips with flight, hotel, and activities  
✅ Search for places with live Google Places API integration  
✅ Dark/Light theme toggle  
✅ Mobile + Desktop responsive UI  
✅ Saved & Visited places management  
✅ Reusable components with theme support  
✅ Navigation with TopNav and BottomNav  
✅ Deployed-ready for **Vercel**

---
## 🌗 How to Turn on Dark and Light Mode

- 🖼️ Tap on **profile image** (rounded shape) on the top → toggle theme button appears
- 👤 Tap on **profile icon** in nav bar → go to **Settings** → toggle theme from there

---

## 📁 Project Structure
---
| Path                             | Description                               |
|---------------------------------|-------------------------------------------|
| src/                             | Root source folder                        |
| ├── assets/                      | Static assets (images like tokyo.png)     |
| ├── components/                  | Reusable UI components                    |
| │ ├── HomePageComponent/         | Home page specific components             |
| │ │ ├── AccommodationList.jsx    | Accommodation list component              |
| │ │ ├── ActivityList.jsx         | Activity list component                   |
| │ │ ├── FlightInfoCard.jsx       | Flight information card                   |
| │ │ ├── TripCard.jsx             | Trip card component                       |
| │ │ └── TripHeader.jsx           | Trip header component                     |
| │ ├── BottomNav.jsx              | Bottom navigation bar (mobile)            |
| │ ├── Button.jsx                 | Reusable button component                 |
| │ ├── OptionButton.jsx           | Button for selecting companion            |
| │ ├── Search.jsx                 | (legacy or alternative search)            |
| │ ├── SelectField.jsx            | Select dropdown field                     |
| │ ├── TextField.jsx              | Input text field with icon                |
| │ └── TopNav.jsx                 | Top navigation bar (desktop)              |
| ├── context/                     | App context (theme)                       |
| │ ├── ThemeContext.jsx           | Theme context provider                    |
| │ └── useTheme.jsx               | Custom hook for theme                     |
| ├── pages/                       | Main application screens                  |
| │ ├── Home.jsx                   | Home page                                 |
| │ ├── Profile.jsx                | Profile page                              |
| │ └── TravelPlan.jsx             | Travel plan page                          |

---

---

## 🧩 Component Summary

| Component            | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **HomePageComponent**| Trip info (header, trip card, flight, hotel, activities)                    |
| `BottomNav`          | Bottom nav (mobile): home, search, plus, user, heart icons                  |
| `TopNav`             | Top nav (desktop): home, search, plus, user icons                           |
| `OptionButton`       | Selectable button for companions (solo, couple, family, friends)            |
| `SelectField`        | Dropdown select with icon                                                   |
| `TextField`          | Text input with icon                                                        |
| `Search`             | Search bar component                                                        |
| `Button`             | Reusable styled button                                                      |
| `Profile.jsx`        | User profile page with saved/visited places, settings, theme toggle         |
| `TravelPlan.jsx`     | Travel form to select destination, duration, companions                     |
| `Home.jsx`           | Main dashboard (trip overview)                                              |

---

## 🌍 Google Places API Integration

This app uses the **Google Places Text Search API** to search for places dynamically.

✅ Configure your API key in `.env`:

```env
VITE_API_KEY=YOUR_GOOGLE_PLACES_API_KEY
Then access in code via:

const apiKey = import.meta.env.VITE_API_KEY;

---

## 💻 Running Locally

1️⃣ Install dependencies:

```bash
npm install

 Create .env file in the root:
 VITE_API_KEY=YOUR_GOOGLE_PLACES_API_KEY

Start dev server:
npm run dev
👉 App runs at http://localhost:5173


✅ Now it will render with proper code blocks and syntax highlighting inside markdown!

Let me know if you'd like the whole README updated or just this section! 🎉






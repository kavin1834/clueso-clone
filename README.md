# Clueso.io Clone

A full-stack clone of **Clueso.io** built as part of a technical assignment to demonstrate product understanding, clean architecture, and end-to-end system integration.

This project recreates Clueso’s core workflows:

- User authentication & onboarding  
- Feedback collection  
- Feedback inbox & detail view  
- AI-powered insights (mocked logic)  
- Dashboard & settings experience  

> Focus was on feature parity and workflows, not pixel-perfect UI.

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- Multer (file uploads)

### Tools
- Git & GitHub
- Postman (API testing)

---

## 🏗 Architecture Overview
React Frontend
|
REST APIs (JWT)
|
Express Backend
|
MongoDB


- Frontend handles UI and user interactions.
- Backend exposes REST APIs for auth, feedback, insights, and videos.
- JWT secures all protected routes.
- MongoDB is used for persistence.

---

## 🔐 Authentication

- Signup & login using email and password.
- Passwords are hashed.
- JWT token is issued on login.
- Token is required for all protected APIs.

---

## ✨ Core Features

### 1. User Onboarding & Auth
- Signup and login flow.
- JWT-based session handling.

### 2. Feedback Collection
- “Collect” page simulates a widget.
- Users can submit feedback.
- Feedback is stored per user in backend.

### 3. Feedback Inbox
- Lists all feedback for the logged-in user.
- Click any item to view full details.
- Status and source displayed.

### 4. AI Insights (Mocked)
- Insights generated from real feedback data.
- Shows total feedback count and common themes.
- Uses simple rule-based logic (not real LLM).
- Acceptable as per assignment guidelines.

### 5. Dashboard
- Clueso-like layout and navigation.
- Shows user-specific data and uploaded videos.

### 6. Settings (UI Demo)
- Profile, Workspace, API Keys, Danger Zone.
- UI-only to demonstrate product flow.

### 7. Video Upload (Bonus)
- Upload videos.
- View uploaded videos in dashboard.

---

## 🎭 Mocked / UI-Only Features

The following are included for product completeness but are not fully functional:

- Embed widget code  
- Chrome extension info  
- API key generation  
- Workspace management  
- Danger zone actions  
- Real AI/LLM integration  

These are clearly labeled in the UI and documented here.

---

## 🔗 API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Feedback
- POST `/api/feedback`
- GET `/api/feedback`

### Insights
- GET `/api/insights`

### Videos
- POST `/api/videos/upload`
- GET `/api/videos`

(All protected routes require JWT)

---

## How to Run Locally

### Backend
```bash
cd backend
npm install
npm run dev
Runs on: http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Runs on: http://localhost:5173

### Design Decisions

Focused on workflows and integration over full feature depth.

AI insights are mocked using rule-based logic.

Backend enforces authentication for security.

UI mirrors Clueso to show product understanding.

### Limitations

No real AI model integration.

No real browser extension.

Some settings are UI-only.

Minimal analytics & aggregation.

### Demo Video

A walkthrough demo showing:

Signup & login

Submitting feedback

Viewing inbox & detail

Insights updating from feedback

Dashboard, upload & settings navigation

### Demo Link:
https://drive.google.com/file/d/1NVJFuFUv7sT7GmPMYEs62uPm_pd_WAoR/view

### What This Demonstrates

Strong product understanding of Clueso.io

Clean separation of frontend & backend

End-to-end API integration

JWT-secured system design

Professional UI and documentation

### Author

Kavin M
Built as part of a full-stack technical assignment.


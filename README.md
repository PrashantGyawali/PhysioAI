# PhysioAI

An AI-powered physical therapy platform that provides personalized exercise recommendations and real-time motion tracking for rehabilitation at home.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.1-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

## 🚀 Live Demo

**[https://physio-ai-backend.vercel.app/](https://physio-ai-backend.vercel.app/)**

Both frontend and backend are hosted on Vercel.

---

## Overview

PhysioAI combines AI-powered assessment, computer vision motion tracking, and gamification to make physical therapy more accessible and engaging. Users can get personalized exercise plans based on their condition, receive real-time feedback on their form, and track their progress over time.

### The Problem

- Physical therapy is expensive and often inaccessible
- Patients struggle with exercise form without professional guidance
- Lack of motivation leads to poor adherence

### Our Approach

- AI-powered personalized exercise recommendations using Google Gemini
- Real-time pose detection for form correction via MediaPipe
- Gamified experience with achievements and streak tracking
- Comprehensive progress tracking and pain analytics

---

## Features

### Free Tier

| Feature | Description |
|---------|-------------|
| Exercise Library | 100+ exercises across 15+ body regions |
| Body Map Selection | Interactive anatomical map for targeted selection |
| Video Demos | YouTube integration for every exercise |
| Basic Tracking | Workout history and session logs |

### Pro Tier

| Feature | Description |
|---------|-------------|
| AI Assessment | Chatbot analyzes your condition via Gemini AI |
| Motion Tracking | Real-time pose detection with MediaPipe |
| Voice Coach | Audio feedback during exercises |
| Advanced Analytics | Pain progression and detailed insights |
| Gamification | Achievement badges and streak tracking |
| PDF Reports | Export your progress reports |
| Pain Tracking | Before/after pain levels per session |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         PhysioAI                                │
├──────────────────────────┬──────────────────────────────────────┤
│        Frontend          │              Backend                 │
│    (React + Vite)        │         (Express + Node)             │
├──────────────────────────┼──────────────────────────────────────┤
│  React 18, TypeScript    │  Express 5, TypeScript               │
│  Tailwind CSS, Shadcn/ui │  MongoDB + Mongoose                  │
│  MediaPipe, Recharts     │  JWT Auth, Google Gemini AI          │
└──────────────────────────┴──────────────────────────────────────┘
```

---

## Project Structure

```
PhysioAI/
├── backend/
│   └── src/
│       ├── config/ENV.ts
│       ├── controllers/
│       │   ├── aiController.ts
│       │   └── authController.ts
│       ├── lib/mongodb.ts
│       ├── middleware/authMiddleware.ts
│       ├── models/User.ts
│       ├── routes/
│       │   ├── aiRoutes.ts
│       │   └── authRoutes.ts
│       └── index.ts
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── dashboard/
│       │   ├── ui/
│       │   ├── BodyMap.tsx
│       │   ├── ChatBot.tsx
│       │   ├── MotionDetector.tsx
│       │   └── UniversalExerciseCounter.tsx
│       ├── context/AuthContext.tsx
│       ├── data/exercises.ts
│       ├── pages/
│       │   ├── Dashboard.tsx
│       │   ├── Index.tsx
│       │   ├── Login.tsx
│       │   └── Pricing.tsx
│       ├── services/gemini.ts
│       ├── utils/
│       │   ├── progressStore.ts
│       │   ├── reportGenerator.ts
│       │   └── voiceCoach.ts
│       └── App.tsx
│
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Google Gemini API key

### Clone the Repository

```bash
git clone https://github.com/yourusername/PhysioAI.git
cd PhysioAI
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/physioai
JWT_SECRET=your-secret-key
GEMINI_API_KEY=your-gemini-api-key
```

Start the server:

```bash
npx tsx src/index.ts
```

Runs on `http://localhost:3000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:8080`

---

## Environment Variables

### Backend

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret for JWT tokens | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | Yes |

### Frontend

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Backend API URL | No (defaults to `/api`) |

---

## API Reference

### Authentication

**Register**
```http
POST /api/auth/register
Content-Type: application/json

{ "name": "John", "email": "john@example.com", "password": "password123" }
```

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{ "email": "john@example.com", "password": "password123" }
```

**Get Current User**
```http
GET /api/auth/me
Authorization: Bearer <token>
```

**Upgrade to Pro (Demo)**
```http
POST /api/auth/subscribe/pro
Authorization: Bearer <token>
```

### AI Recommendations

```http
POST /api/ai/recommendations
Authorization: Bearer <token>
Content-Type: application/json

{
  "assessmentData": {
    "bodyPart": "Lower Back",
    "painSeverity": "4-6 (Moderate)",
    "duration": "1-4 weeks",
    "painType": "Dull/Aching",
    "age": "30-45",
    "activityLevel": "Moderate activity"
  },
  "availableExercises": [...]
}
```

---

## Deployment

### Vercel + Railway

**Frontend (Vercel):**

```bash
cd frontend
npm i -g vercel
vercel
```

Set `VITE_API_URL` to your backend URL.

**Backend (Railway):**

1. Connect your GitHub repo
2. Set root directory to `backend`
3. Add environment variables
4. Build: `npm install && npx tsc`
5. Start: `node dist/index.js`

### Docker

**docker-compose.yml:**

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=${MONGODB_URI}
      - JWT_SECRET=${JWT_SECRET}
      - GEMINI_API_KEY=${GEMINI_API_KEY}

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

```bash
docker-compose up -d
```

---

## Tech Stack

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Shadcn/ui, MediaPipe, Recharts, React Router, Axios, jsPDF

**Backend:** Express 5, TypeScript, MongoDB, Mongoose, JWT, bcrypt.js, Google Generative AI

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/something`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Acknowledgments

- [MediaPipe](https://mediapipe.dev/) - Pose detection
- [Google Gemini](https://ai.google.dev/) - AI recommendations
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling

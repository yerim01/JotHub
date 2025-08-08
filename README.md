# JotHub 📝
A Notion-style document editor built with **Next.js**, **Convex**, and **Clerk**  
Deployed on **Vercel** - **Website** : **[JotHub](https://jot-hub.vercel.app/)**

> This is a clone project based on the excellent [Code with Antonio](https://www.youtube.com/@codewithantonio) tutorial.

---


## ✨ Tech Stack

| Layer           | Technology               |
|----------------|---------------------------|
| **Frontend**   | Next.js 15, React 18, Tailwind CSS |
| **Backend**    | Convex (Realtime DB + Functions) |
| **Auth**       | Clerk                     |
| **Image Upload** | Edge Store              |
| **Editor**     | BlockNote                 |
| **State Management** | Zustand             |
| **CI / Linting** | Trunk  (optional)       |

---
## 📦 Getting Started

### 1. Clone the repo

```
git clone https://github.com/yerim01/JotHub
```

### 2. Install dependencies
```
npm install
```

### 3. Set up environment variables
Create a .env.local file and add the following:
```
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment_name

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

EDGE_STORE_ACCESS_KEY=your_edge_store_access_key
EDGE_STORE_SECRET_KEY=your_edge_store_secret_key

```

### Frontend

```
npm run dev
```

### Backend

```
npx convex dev
```
## ✅ Trunk (Optional Dev Tool)
To enable linting, formatting, and CI checks:
```
trunk login
```
# Rental Car Service

A modern, high-performance car rental application built with **Next.js 15 (App Router)**. This project features a robust proxy architecture to handle API requests securely and efficiently.

## 🚀 Key Features

* **Car Catalog**: Browse a wide range of vehicles with advanced filtering and pagination.
* **Detailed Car Views**: Deep-dive into specifications, rental conditions, and accessories for each car.
* **Zustand State Management**: Seamless and fast client-side state handling.
* **API Proxy Architecture**: Secure communication with the external backend via Next.js Route Handlers.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.

## 🛠 Tech Stack

* **Framework**: [Next.js 15](https://nextjs.org/)
* **Styling**: CSS Modules
* **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
* **HTTP Client**: [Axios](https://axios-http.com/)
* **Icons**: Lucide React / Custom SVG Icons
* **Notifications**: React Hot Toast

## 🏗 Architecture Overview

The project uses a **Proxy Pattern** to communicate with the GoIT Car Rental API.

1. **Client Layer**: React components trigger actions via Zustand stores.
2. **Proxy Layer**: Next.js Route Handlers (`/api/catalog`, `/api/brands`) intercept client requests, attach necessary logic, and forward them to the external API.
3. **External API**: The backend receives requests from our server, ensuring better security and bypassing CORS issues.

## 🏁 Getting Started

### 1. Prerequisites

* Node.js 20.x or later
* npm / yarn / pnpm

### 2. Environment Variables

Create a `.env.local` file in the root directory and add your API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000

```

### 3. Installation

```bash
npm install

```

### 4. Run Development Server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the application.

## 📖 Project Structure

* `/app` - Next.js App Router (Pages and API Routes).
* `/components` - Reusable UI components (CarCard, Filters, RentalForm).
* `/lib/store` - Zustand store for global state.
* `/lib/api` - Axios instances for client-server and server-backend communication.
* `/types` - TypeScript interfaces and types.

---

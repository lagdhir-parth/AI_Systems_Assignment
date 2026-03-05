# AI Sustainable Commerce Dashboard

**AI Systems Internship Assignment**

A full-stack AI-powered dashboard that demonstrates how AI can assist sustainable e-commerce operations.

This assignment required implementing **any two modules** and providing **architecture outlines** for the remaining modules.

## Modules

### Implemented

1. **AI Product Category Generator**
2. **AI B2B Sustainable Proposal Generator**

### Architecture Outlined (Not Implemented)

3. **AI Impact Reporting Generator**
4. **AI WhatsApp Support Bot**

**Tech used:** React + Node.js + MongoDB + OpenRouter AI

---

## Project Overview

Sustainable commerce platforms often need automation for:

- Product catalog management
- SEO tag generation
- Corporate gifting proposals
- Sustainability impact reporting
- Customer support

This project demonstrates how **AI integrates with business logic** to automate these operations.

---

## Tech Stack

### Frontend (`/client`)

- React (Vite)
- TailwindCSS
- React Router
- Axios

### Backend (`/server`)

- Node.js
- Express.js
- MongoDB
- Mongoose
- OpenRouter AI API

### Security Middleware

- `helmet`
- `express-rate-limit`
- `express-mongo-sanitize`
- `xss-clean`
- `sanitize-html`

---

## System Architecture (High-Level)

```text
User
  ↓
Frontend (React + Vite)
  ↓ HTTP API Requests
Backend (Node.js + Express)
  ├─ Request validation
  ├─ Prompt builder
  ├─ OpenRouter AI client
  ├─ JSON parsing + post-processing
  ├─ Persistence (AI logs / products)
  ↓
MongoDB
  ↓
Frontend UI displays results
```

---

## Implemented Modules

## Module 1: AI Product Category Generator

### Purpose

Automatically generate:

- Primary category
- Sub-category
- SEO tags
- Sustainability filters

### Architecture (Flow)

```text
React Form
  ↓ POST /api/ai/category
Express Route
  ↓
Validation Middleware
  ↓
Controller
  ↓
Category Prompt Builder
  ↓
OpenRouter AI Model
  ↓
JSON Parser + Validation
  ↓
Store: Product + AI Logs (MongoDB)
  ↓
Return structured response to client
```

### Example Output

```json
{
  "primary_category": "Personal Care",
  "sub_category": "Oral Care",
  "seo_tags": [
    "eco toothbrush",
    "bamboo toothbrush",
    "plastic free toothbrush"
  ],
  "sustainability_filters": ["plastic-free", "biodegradable"]
}
```

---

## Module 2: AI B2B Proposal Generator

### Purpose

Generate a sustainable corporate gifting proposal based on:

- Budget
- Event type
- Company size

### Architecture (Flow)

```text
React Form
  ↓ POST /api/ai/proposal
Express Route
  ↓
Validation Middleware
  ↓
Controller
  ↓
Proposal Prompt Builder
  ↓
OpenRouter AI Model
  ↓
JSON Parser + Validation
  ↓
Store: AI Logs (MongoDB)
  ↓
Return proposal response to client
```

### Example Output

```json
{
  "product_mix": [
    {
      "product": "Bamboo Water Bottles",
      "quantity": 200
    }
  ],
  "budget_allocation": {
    "Bamboo Water Bottles": 20000
  },
  "estimated_cost": 20000,
  "impact_summary": "Reduces single-use plastic waste."
}
```

---

## Architecture Outline for Remaining Modules (Planned)

## Module 3: AI Impact Reporting Generator (Outline)

### Purpose

Automatically generate sustainability impact reports for orders.

The system would calculate:

- Estimated plastic saved
- Carbon emissions avoided
- Local sourcing impact
- Human-readable sustainability statement

### Architecture (Flow)

```text
Order data (products + quantities)
  ↓
Backend impact calculator (business rules + conversion factors)
  ↓
AI prompt builder
  ↓
OpenRouter AI model
  ↓
Human-readable impact statement + structured JSON
  ↓
Store impact report in MongoDB
```

### Example Output

```json
{
  "plastic_saved_grams": 450,
  "carbon_avoided_kg": 12.5,
  "local_sourcing_impact": "Supports local farmers and reduces transport emissions",
  "impact_statement": "This order helped reduce plastic waste and supported sustainable sourcing."
}
```

---

## Module 4: AI WhatsApp Support Bot (Outline)

### Purpose

Provide automated customer support using AI.

Capabilities:

- Answer order status queries
- Handle return policy questions
- Escalate refund issues
- Log conversations

### Architecture (Flow)

```text
Customer WhatsApp message
  ↓
WhatsApp API / Webhook
  ↓
Backend message handler
  ↓
Intent detection
  ├─ Order query → fetch order from DB
  └─ Policy/FAQ → knowledge base / prompt context
  ↓
OpenRouter AI model
  ↓
Send response back to WhatsApp
  ↓
Store conversation logs
```

### Example Conversation

**User:** "Where is my order #1234?"  
**Bot:** "Your order #1234 has been shipped and will arrive in 2 days."

---

## Repository Structure

```text
AI_Systems_Assignment/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── CategoryGenerator.jsx
│   │   │   └── ProposalGenerator.jsx
│   │   └── services/
│   │       └── api.js
└── server/
    ├── app.js
    ├── server.js
    └── src/
        ├── config/
        ├── controllers/
        ├── routes/
        ├── services/
        │   └── ai/
        ├── models/
        ├── middlewares/
        └── utils/
```

---

## API Endpoints

Base path:

- `/api/ai`

Endpoints:

- `POST /api/ai/category`
- `POST /api/ai/proposal`

---

## Local Development Setup

### Prerequisites

- Node.js + npm
- MongoDB connection string (local or Atlas)
- OpenRouter API key

---

## 1) Clone the repository

```bash
git clone https://github.com/lagdhir-parth/AI_Systems_Assignment.git
cd AI_Systems_Assignment
```

---

## 2) Backend Setup (`/server`)

### Install dependencies

```bash
cd server
npm install
```

### Create `.env` (server)

```bash
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/ai_systems_assignment
OPENROUTER_API_KEY=your_api_key
```

### Run the backend

```bash
npm run dev
```

---

## 3) Frontend Setup (`/client`)

### Install dependencies

```bash
cd ../client
npm install
```

### Create `.env` (client)

```bash
VITE_API_URL=http://localhost:3000/api
```

### Run the frontend

```bash
npm run dev
```

---

## Key Features

- AI-powered catalog automation (categories, tags, sustainability filters)
- AI-generated corporate gifting proposals
- Sustainability-focused architecture
- Secure backend with validation + rate limiting
- Prompt and response logging in MongoDB

---

## Future Improvements

- Implement Impact Reporting Generator
- Integrate WhatsApp chatbot (webhooks + WhatsApp Business API)
- Add Swagger/OpenAPI docs
- Add Docker setup for one-command startup
- Add unit/integration tests

---

## License

Developed for the **AI Systems Internship Assignment**.

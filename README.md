# BFHL Backend API

This is a REST API developed for the BFHL (Bajaj Finserv Health Ltd) qualifier assessment. It handles mathematical operations and integrates with Google's Gemini AI to answer questions.

## 🚀 Live Deployment
**Base URL:** https://bfhl-project-beta.vercel.app
---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **AI Model:** Google Gemini Pro
* **Hosting:** Vercel

---

## 📂 Project Structure
```bash
bfhl-api/
├── src/
│   ├── controllers/  # Logic for handling API requests
│   ├── routes/       # API route definitions
│   └── utils/        # Helper functions (Math logic, AI integration)
├── index.js          # Entry point of the application
├── vercel.json       # Vercel deployment configuration
└── .env              # Environment variables (Not shared)
```
---
## 🔌 API Endpoints

### 1. `POST /bfhl`

This is the main endpoint that processes input data based on the specific key provided.

**Request Format (JSON):**

Send **one** of the following keys in the JSON body.

|**Key**|**Type**|**Description**|
|---|---|---|
|`fibonacci`|`Integer`|Returns the Fibonacci sequence up to N terms.|
|`prime`|`Array`|Filters prime numbers from the given array.|
|`lcm`|`Array`|Calculates the Least Common Multiple (LCM).|
|`hcf`|`Array`|Calculates the Highest Common Factor (HCF).|
|`AI`|`String`|Returns a single-word AI response to a question.|

**Example Requests & Responses:**

**Scenario 1: Fibonacci**

- **Request:** `{ "fibonacci": 7 }`
    
- **Response:**
    
    JSON
    
    ```
    {
      "is_success": true,
      "official_email": "your.email@chitkara.edu.in",
      "data": [0, 1, 1, 2, 3, 5, 8]
    }
    ```
    

**Scenario 2: AI Question**

- **Request:** `{ "AI": "What is the capital of India?" }`
    
- **Response:**
    
    JSON
    
    ```
    {
      "is_success": true,
      "official_email": "your.email@chitkara.edu.in",
      "data": "New Delhi"
    }
    ```
    

---

### 2. `GET /health`

A simple health check endpoint to verify the API status.

- **Response:**
    
    JSON
    
    ```
    {
      "is_success": true,
      "official_email": "your.email@chitkara.edu.in"
    }
    ```
    

---

## ⚙️ Local Setup Guide

1. **Clone the Repository:**
    
    
    ```
    git clone [https://github.com/YOUR_USERNAME/bfhl-api.git](https://github.com/YOUR_USERNAME/bfhl-api.git)
    cd bfhl-api
    ```
    
2. **Install Dependencies:**
   
    
    ```
    npm install
    ```
    
3. **Setup Environment Variables:**
    
    Create a `.env` file in the root directory and add the following:
    
    
    ```
    PORT=3000
    GEMINI_API_KEY=your_google_gemini_api_key
    EMAIL=your.email@chitkara.edu.in
    ```
    
4. **Run the Server:**
    
    
    ```
    node index.js
    ```
    
    The server will start at `http://localhost:3000`.
    

---

## 🛡️ Security & Evaluation Notes

- **Input Validation:** The API validates that inputs are of the correct type (e.g., integers for Fibonacci, arrays for Prime/LCM).
    
- **Error Handling:** Graceful error messages are returned for invalid JSON or bad requests.
    
- **Security:** API keys are managed via environment variables and are not exposed in the codebase.

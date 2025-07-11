
# 📊 Dashboard Microservice

The **Dashboard Microservice** is a part of the larger SaaS platform architecture. It handles all user-facing dashboard-related features such as displaying personalized information, service usage analytics, settings, and more.

---

## 🚀 Features

- Displays user data and SaaS metrics post-authentication.
- Handles user settings and preferences.
- Fetches and displays data from other services (Auth, Billing, etc.).
- Responsive, dynamic frontend components (if fullstack).
- Secure route access using cookie-based authentication.
- Mentee/Mentor user-type management.

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js
- **Auth:** Cookie-based session management (from Auth microservice)
- **Database:** MongoDB / PostgreSQL (optional depending on need)
- **Communication:** RESTful APIs (microservice architecture)
- **Frontend (Optional):** React / Next.js (App Router)
- **Other:** dotenv, cors, helmet, morgan, etc.

---

## 📁 Folder Structure

```

dashboard-service/
│
├── controllers/         # Business logic
├── routes/              # API routes
├── middlewares/         # Auth guards, error handlers
├── services/            # External services or utility logic
├── config/              # Environment and DB configuration
├── utils/               # Utility functions
├── index.js             # Entry point
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dashboard-service.git
cd dashboard-service
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=5002
AUTH_SERVICE_URL=http://localhost:5001
COOKIE_SECRET=your_cookie_secret
NODE_ENV=development
```

### 4. Start the Server

```bash
# Dev mode
npm run dev

# Production
npm start
```

---

## 🔐 Authentication & Authorization

This microservice communicates with the **Auth microservice** for authentication. Auth tokens are sent via secure HTTP-only cookies.

* All protected routes verify user tokens using the `Auth` microservice.
* Middleware is used to guard routes based on user roles (e.g., Mentee, Mentor).

---

## 🔄 API Endpoints

### `GET /api/dashboard`

* **Description:** Returns dashboard data for logged-in user.
* **Access:** Protected (requires valid cookie)

### `PATCH /api/dashboard/join-as-mentor`

* **Description:** Upgrades user role from `mentee` to `mentor`.
* **Access:** Protected

---

## 🔌 Integration with Other Microservices

* **Auth-Service:** Verifies user tokens and roles
* **Billing-Service (Future):** Displays billing history, usage limits
* **Interview-Service (Future):** Displays mock interview results & schedules

---

## 🧪 Testing

Use a tool like **Postman** or **Thunder Client** for manual endpoint testing.

You can also write automated tests using:

```bash
npm install --save-dev jest supertest
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Contributing

If you want to contribute:

1. Fork the repository
2. Create a new feature branch
3. Make changes
4. Open a pull request

---

## 👨‍💻 Author

Matidza M.Z
[GitHub](https://github.com/Matidza)
SaaS Project — 2025



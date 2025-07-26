Great! Thanks for sharing the repo link:
🔗 **[https://github.com/Matidza/Auth-Service](https://github.com/Matidza/Auth-Service)**

Now that I can refer to your actual Auth microservice, I’ll guide you step by step on how to **connect your Dashboard microservice to this Auth-Service** in a clean, decoupled, and microservice-friendly way.

---

## 🔄 Goal

You want to **reference the User model in the Auth microservice** inside the **Dashboard microservice** to associate things like profiles with users.

---

## ✅ Step-by-Step Implementation Plan

### **Step 1: Use `userId` as Reference in Dashboard Microservice**

In your Dashboard microservice (MongoDB model), just **store the `userId`** returned from the Auth service during login or sign-up.

```js
// models/Profile.js (Dashboard Microservice)
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },
  bio: String,
  skills: [String],
  avatar: String,
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
```

---

### **Step 2: Call Auth Service API to Fetch User Info**

In your Dashboard service, use **Axios** to communicate with the Auth service over HTTP.

```bash
npm install axios
```

Then:

```js
// routes/profileRoutes.js (or controller file)
import express from 'express';
import Profile from '../models/Profile.js';
import axios from 'axios';

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });

    // Fetch user info from Auth service
    const userResponse = await axios.get(`http://localhost:5000/api/users/${profile.userId}`);
    const user = userResponse.data;

    return res.json({ profile, user });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
```

---

### **Step 3: Expose a "Get User by ID" Route in Auth Service**

Looking at your GitHub repo, you should add this route in the `Auth-Service`:

```js
// routes/userRoutes.js
import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    return res.json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
```

And make sure it's used in `index.js`:

```js
import userRoutes from './routes/userRoutes.js';
app.use('/api', userRoutes);
```

---

### ✅ Optional: Protect with Auth Middleware

If you’re using cookie-based sessions or JWT, make sure the request from Dashboard includes authentication headers/cookies, or use a shared secret/API key.

---

### ✅ Optional: Use Docker Compose Networking

If both services are containerized, you can call the Auth service using its container name:

```js
const userResponse = await axios.get(`http://auth-service:5000/api/users/${profile.userId}`);
```

> `auth-service` should be the service name in `docker-compose.yml`.

---

## ✅ Summary

| Task                        | Implementation                 |
| --------------------------- | ------------------------------ |
| Reference user in Dashboard | Use `userId` field (ObjectId)  |
| Fetch user info             | Use `axios` to call Auth API   |
| Avoid direct model sharing  | Never import models from Auth  |
| Protect microservices       | Use JWT/cookies/shared secrets |

---

Would you like help creating a secure inter-service token or Docker Compose setup?

# Wanderlust 🌍

Wanderlust is a full-stack travel accommodation web application inspired by Airbnb. It enables users to explore, create, and manage property listings, upload images, add reviews, and view locations on an interactive map.

##  Live Demo

**Website:** https://wanderlust-omega-opal.vercel.app/listings

---

##  Project Overview

Wanderlust is a travel accommodation platform where users can browse, create, edit, and delete property listings. The application provides secure authentication, authorization, image uploads, reviews, and complete CRUD functionality.

Built using the MERN ecosystem technologies along with third-party integrations, the platform delivers a seamless experience for travelers and property owners.

### Key Highlights

* Secure user authentication and authorization
* Property listing management with full CRUD operations
* Cloud-based image storage and management
* Interactive maps for location visualization
* Review and rating system
* Server-side validation and error handling
* Responsive and user-friendly interface
* RESTful architecture with MVC design pattern

---

##  Features

### User Management

* User Signup
* User Login & Logout
* Secure Authentication using Passport.js
* Role-based Authorization

### Property Listings

* Create Listings
* View Listings
* Edit Listings
* Delete Listings
* Upload Property Images

### Reviews

* Add Reviews
* Delete Reviews
* Review Validation

### Maps & Location

* Interactive Maps using Mapbox
* Property Location Visualization

### Additional Features

* Flash Messages for User Feedback
* Server-side Validation with Joi
* Session Storage using MongoDB
* Responsive Design using Bootstrap

---

##  Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### Authentication & Security

* Passport.js
* Passport Local Mongoose
* Express Session
* Connect Mongo

### File Upload & Storage

* Multer
* Cloudinary

### Maps & Location Services

* Mapbox API

### Validation

* Joi

### Deployment

* Vercel

### Architecture

* MVC Architecture
* RESTful Routing

---

## 📂 Project Structure

```bash
wanderlust/
├── api/
│   └── index.js
├── controllers/
├── init/
├── models/
├── public/
│   ├── css/
│   └── js/
├── routes/
├── utils/
├── views/
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── vercel.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLAS_DB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

---

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Gopi-9279/wanderlust.git
cd wanderlust
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add all required credentials.

### 4. Run the Application

```bash
npm start
```

### 5. Open in Browser

```text
http://localhost:8080/listings
```

---

##  Deployment

The project is configured for deployment on Vercel using:

* `vercel.json`
* `api/index.js`

### Deployment Steps

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables in:

```text
Vercel Dashboard
→ Project Settings
→ Environment Variables
```

4. Configure MongoDB Atlas network access:

```text
0.0.0.0/0
```

5. Redeploy the application.

---

##  Learning Outcomes

Through this project, I gained hands-on experience with:

* Full-Stack Web Development
* RESTful API Design
* MVC Architecture
* Authentication & Authorization
* Cloudinary Image Management
* MongoDB Database Design
* Session Management
* Third-Party API Integration
* Deployment on Vercel

---

## 👨‍💻 Author

**Gopi Kishan**

GitHub: https://github.com/Gopi-9279

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

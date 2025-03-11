# BlogAssignment
A full-stack blog application built with **React** for the frontend and **NestJS** for the backend. Users can create posts with titles and bodies, like and comment on posts.

## 🚀 Features  
- 📝 Create and publish posts  
- 💬 Comment on posts  
- ❤️ Like posts  
- 🔥 Interactive UI with React  
- 🌐 RESTful API with NestJS  

---

## 🛠️ Tech Stack  
### **Frontend**  
- React.js (Vite or Create React App)  
- Axios for API calls  
- Bootstrap CSS / Styled Components

### **Backend**  
- NestJS (Node.js + TypeScript)  
- MongoDB (Mongoose ORM)  

---

## 🏗️ Installation & Setup  

### **1. Clone the Repository**  

git clone https://github.com/marwamagdyx/BlogAssignment.git
cd BlogAssignment

### **2. Backend Setup (NestJS)**  
cd nestbackend
npm install 

### **3. Environment Variables**  
Create a .env file in nestbackend/ and add
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

### **4. Run the backend** 
npm run start:dev

### **5. Frontend Setup (ReactJS)**  
cd ../frontend
npm install

### **6. Run the frontend**
npm start


The frontend should now be running on http://localhost:3000/


## 🎯 API Endpoints (Backend)  

| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| GET    | `/posts`                | Get all posts             |
| POST   | `/posts`                | Create a new post         |
| GET    | `/posts/:id`            | Get a single post         |
| DELETE | `/posts/:id`            | Delete a post             |
| POST   | `/posts/:id/like`       | Like a post               |
| POST   | `/posts/:id/comment`    | Comment on a post         |
| GET    | `/posts/:id/comments`   | Get all comments for a post ||

---

## 🏗️ Development Approach  

### **Frontend (React.js)**  
- **Component-Based Structure:** The UI is built using reusable React components.  
- **State Management:** Uses `useState` and `useEffect` for managing state efficiently.  
- **API Calls:** Uses Axios or Fetch API to communicate with the backend.  
- **UI Styling:** Bootstrap CSS with extra styling is used for a clean and responsive design.  

### **Backend (NestJS)**  
- **Modular Architecture:** Implements Controllers, Services, and DTOs for a well-structured codebase.  
- **Database:** Uses MongoDB with Mongoose ORM to store posts data, likes, and comments.  
- **Error Handling:** Implements proper exception filters and validation for API requests.  

---

## 🏁 Future Improvements  

- **🔐 User Authentication:** Implement user login and registration.  
- **🖼️ Image Uploads:** Allow users to upload images for posts.  
- **📈 Infinite Scrolling:** Improve user experience by loading posts dynamically.  
- **🔔 Notifications:** Add real-time notifications for new comments or likes.  
- **📊 Admin Dashboard:** Implement an admin panel to manage posts and users.  

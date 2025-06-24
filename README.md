# 📝 Swift Blog

Swift Blog is a clean and responsive personal technical blog built with **HTML**, **CSS**, and **JavaScript**, using **JSON Server** as a mock backend for storing and serving blog post data. It demonstrates how to build a Single Page Application (SPA) that dynamically fetches and displays content from a local or remote API.

---

## 📌 Project Summary

The purpose of Swift Blog is to showcase how a simple blog system can be created using vanilla web technologies without relying on frameworks. Blog posts are stored in a JSON file (`db.json`) and served using JSON Server. The frontend fetches the posts and renders them in a modern, responsive layout.

---


## 📂 Project Structure

Swift-Blog/
├── db.json # Contains all blog post data (served by JSON Server)
└── client/
├── index.html # Main HTML page for the SPA
├── styles.css # CSS file with all styling (light theme)
└── script.js # JavaScript logic for fetching and rendering blog posts

yaml
Copy
Edit

---

## 🔌 Installation & Usage Instructions

### ✅ 1. Install JSON Server
```bash
npm install -g json-server
✅ 2. Run the backend
bash
json-server --watch db.json --port 3000

- This will serve your blog post data on http://localhost:3000/posts.

✅ 3. Launch the frontend
- Open the client/index.html file directly in your browser, or use a tool like Live Server.
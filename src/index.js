import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import App from './App'; // public layout
import AdminLayout from './admin/adminLayout';

// Public Pages
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import SideQuests from './pages/sidequest';
// import Post from './pages/post';

// Admin Pages
import Dashboard from './admin/dashboard';
//import Posts from './admin/posts/index'; // List of posts
// import CreatePost from './admin/createPost';
// import EditPost from './admin/editPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Public Layout */}
      <Route path="*" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sidequests" element={<SideQuests />} />
        {/* <Route path="post/:id" element={<Post />} /> */}
      </Route>

      {/* Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="/posts/index" element={<Posts />} /> */}
        {/* Add more admin routes here */}
        {/* <Route path="create" element={<CreatePost />} /> */}
        {/* <Route path="edit/:id" element={<EditPost />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);


<><script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script><script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script><script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script><script>var Alert = ReactBootstrap.Alert;</script></>

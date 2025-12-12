import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from "./context/DarkModeContext";

// Layouts
import App from './App'; // public layout
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import SideQuests from './pages/sidequest';
// import Post from './pages/post';

// Admin Pages
import Dashboard from './admin/dashboard';
import Posts from './admin/posts/index'; // List of posts
import AddPost from './admin/posts/addpost';
import EditPost from './admin/posts/editpost';
import Post from './admin/posts/post';
import Login from './admin/login';
import Signup from './admin/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DarkModeProvider>
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
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/add" element={<AddPost />} />
          <Route path="posts/:postId" element={<Post />} />
          <Route path="posts/:postId/edit" element={<EditPost />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
      </Routes>
    </DarkModeProvider>
  </BrowserRouter>
);


<><script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script><script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script><script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script><script>var Alert = ReactBootstrap.Alert;</script></>

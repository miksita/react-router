import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/home';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import ProfileSetup from './pages/ProfileSetup';
import Profile from './pages/Profile';
import SupportForm from './pages/SupportForm'

export default function App() {
  const [createdPosts, setCreatedPosts] = useState<any[]>([]);

  const handleAddPost = (newPost: any) => {
    setCreatedPosts((prev) => [...prev, newPost]);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<SupportForm />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/profile" element={<Profile />} />
        <Route 
          path="/posts" 
          element={<Posts createdPosts={createdPosts} />} 
        />
        <Route
          path="/create-post"
          element={<CreatePost addPost={handleAddPost} />}
        />
      </Routes>
      </>
  );
}


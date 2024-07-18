import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../pages/home";
import {
  PostListPage,
  PostDetailPage,
  PostNewPage,
  PostEditPage,
} from "../pages/posts";
import ProfilePage from "../pages/profile";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/posts/new" element={<PostNewPage />} />
      <Route path="/posts/edit/:id" element={<PostEditPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Profile from "./pages/profile/profile";
import Main from "./pages/home";
import AddRecipe from "./pages/add_recipe";
import DetailRecipe from "./pages/detail_recipe";
import DetailVideo from "./pages/detail-video";
import SearchPage from "./pages/search_page";
import ProtectedRoute from "./components/module/ProtectedRoute";
import PublicRoute from "./components/module/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
        />
        <Route path="/add-recipe" element={
          <ProtectedRoute>
            <AddRecipe />
          </ProtectedRoute>
        } 
        />
        <Route path="/detail-recipe/:recipe_id" element={<DetailRecipe />} />
        <Route path="/detail-video/:recipe_id" element={<DetailVideo />} />
        <Route path="/search-page" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

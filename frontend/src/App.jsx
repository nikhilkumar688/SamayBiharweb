import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInForm from "./auth/forms/SignInForm";
import SignUnForm from "./auth/forms/SignUnForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NewsArticles from "./pages/NewsArticles";
import Header from "./components/shared/Header";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUnForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<NewsArticles />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;

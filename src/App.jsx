import React, { useState, useEffect } from "react";
// import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import ItemPage from "./components/pages/ItemPage";

const App = () => {
  // use Prev State funciton
  const pullPrevList = () => {
    const prevItemList = JSON.parse(localStorage.getItem("todoItem"));
    return prevItemList ? prevItemList : [];
  };

  // state
  const [todoItems, setTodoItems] = useState(pullPrevList());
  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className="relative">
      <Router>
        <Header />
        {/* background */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1513909619904-efd11e5b8666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            className="w-full h-full fixed top-0 -z-10 object-cover"
          />
          <div className="w-full h-full fixed top-0 bg-black/40 z-0"></div>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home todoItems={todoItems} setTodoItems={setTodoItems} />}
          />
          <Route
            path="/item/:id"
            element={
              <ItemPage todoItems={todoItems} setTodoItems={setTodoItems} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

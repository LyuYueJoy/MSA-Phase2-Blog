import React from "react"
import Navbar from "./Components/navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./Components/home_page/home"
import Articles from './Components/Articles/article'
import AddArticle from './Components/addArticles/addArticle'

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Router */}
      <div className="Router">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/articles">
            <Route index element={<Articles/>} />
            <Route path="add" element={<AddArticle />}/>

          </Route>
        </Routes>


      </div>

    </div>
  )
}

export default App

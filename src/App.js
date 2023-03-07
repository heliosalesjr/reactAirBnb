import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card.js"
import "./styles/style.css"

export default function App() {
    return (
        <div>
          <NavBar />
          <Hero />
          <Card 
          img="katie.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
          />
        </div>
    )
}


import React from "react";
import Navbar from "./components/Navbar";
import DuaCard from "./components/DuaCard";
import "./App.css";
import "./components/Navbar.css";
import "./components/DuaCard.css";

function App() {
    return (
    <div className="app" style={{ fontFamily: "'Amiri', serif" }}>
        <Navbar />
        <div className="content" style={{ direction: "rtl", textAlign: "right" }}>
        <DuaCard 
            text="اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ"
            source="Sunan Abi Dawud 5074"
        />
        <DuaCard 
            text="رَبِّ زِدْنِي عِلْمًا"
            source="Quran 20:114"
        />
        </div>
    </div>
    );
}

export default App;

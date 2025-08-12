import React from "react";
import "./DuaCard.css";

export default function DuaCard({ text, source }) {
    return (
    <div className="dua-card">
        <p className="dua-text">{text}</p>
        <small className="dua-source">{source}</small>
    </div>
    );
}

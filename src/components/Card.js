import React from "react"

export default function Card() {
    return (
        <section className="card">
            <img src="./img/katie.png"/>
            <div className="card--stats">
                <img src="./img/star.png" className="card--star"/>
                <span className="gray">5.0</span>
                <span className="gray">(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span>/ person</p>
        </section>
    )
}
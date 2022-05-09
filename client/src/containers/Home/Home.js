import React from "react";
import "./Home.css";
// import Logo from '../images/jo-sp-photography logo.jpg'

export default function Home() {
  return (
    <div id='home-page'>
      <ul class="cb-slideshow">
        <li>
          <span>Image 01</span>
          <div>
            <h3 className="home-text">Family Photos</h3>
          </div>
        </li>
        <li>
          <span>Image 02</span>
          <div>
            <h3 className="home-text">Events</h3>
          </div>
        </li>
        <li>
          <span>Image 03</span>
          <div>
            <h3 className="home-text">Fine Art</h3>
          </div>
        </li>
        <li>
          <span>Image 04</span>
          <div>
            <h3 className="home-text">Headshots</h3>
          </div>
        </li>
        <li>
          <span>Image 05</span>
          <div>
            <h3 className="home-text">Lifestyle</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
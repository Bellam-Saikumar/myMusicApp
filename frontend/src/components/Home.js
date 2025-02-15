import React from 'react';
import '../index.css';
import { Navbar } from './Navbar'; 

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="homepage-container">
                {/* <img src="/Homepage1.jpg" alt="Music App Left" className="image-left" /> */}
                
                <div className="text-container">
                    <h1 className="title">Welcome to Music🎧</h1>
                    <p className="description">
                        Experience the rhythm of your life with our <span className="highlight">colorful</span> and <span className="highlight">dynamic</span> music streaming app.  
                        Discover, play, and share your favorite tunes seamlessly!  
                    </p>
                </div>

                <div className='video-container'>

                <video autoPlay loop muted playsInline className="video-right">
                    <source src="/1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted playsInline className="video-right">
                    <source src="/2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted playsInline className="video-right">
                    <source src="/4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted playsInline className="video-right">
                    <source src="/3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted playsInline className="video-right">
                    <source src="/5.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                </div>
            </div>
        </>
    );
};

export { HomePage };

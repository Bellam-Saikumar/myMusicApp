import React, { useRef, useState, useEffect } from 'react';
import '../index.css';
import { Navbar } from './Navbar';
import songData from '../data/songData'; 

const PlayList = () => {
    const audioRefs = useRef(songData.map(() => React.createRef()));

    const [currentAudio, setCurrentAudio] = useState(null);
    const [playingAudioName, setPlayingAudioName] = useState(null);

    useEffect(() => {
        if (currentAudio) {
            currentAudio.addEventListener('ended', handleSongEnd);
        }
        return () => {
            if (currentAudio) {
                currentAudio.removeEventListener('ended', handleSongEnd);
            }
        };
    }, );

    const handlePlayPause = (ref, name) => {
        if (currentAudio && currentAudio !== ref.current) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        if (ref.current.paused) {
            ref.current.play();
            setCurrentAudio(ref.current);
            setPlayingAudioName(name);
        } else {
            ref.current.pause();
            setCurrentAudio(null);
            setPlayingAudioName(null);
        }
    };

    const handleBackward = (ref) => {
        if (ref.current) {
            ref.current.currentTime -= 10;
        }
    };

    const handleForward = (ref) => {
        if (ref.current) {
            ref.current.currentTime += 10;
        }
    };

    const handleSongEnd = () => {
        const currentIndex = songData.findIndex(song => song.name === playingAudioName);
        const nextIndex = (currentIndex + 1) % songData.length;
        const nextSongRef = audioRefs.current[nextIndex];

        setCurrentAudio(nextSongRef.current);
        setPlayingAudioName(songData[nextIndex].name);
        nextSongRef.current.play();
    };

    const getButtonStyle = (name) => ({
        backgroundColor: playingAudioName === name ? 'red' : '',
        color: playingAudioName === name ? 'white' : '',
    });

    const getButtonText = (name) => (playingAudioName === name ? 'Pause' : 'Play');
    
    return (
        <>
            <Navbar />
            <div className="card-container">
                {songData.map((song, index) => (
                    <div className="card" key={index}>
                        <img src={song.image} alt="Logo" />
                        <div className="card-body">
                            <h3 className="card-title">{song.title}</h3>
                            <h5 className="card-title" style={{ fontSize: "20px" }}>{song.name}</h5>
                            <p className="card-description">{song.year}</p>
                            <div className="music-player">
                                <audio ref={audioRefs.current[index]} src={song.audio} />
                                <button onClick={() => handleBackward(audioRefs.current[index])}>⏪ 10s</button>
                                <button 
                                    onClick={() => handlePlayPause(audioRefs.current[index], song.name)}
                                    style={getButtonStyle(song.name)}
                                >
                                    {getButtonText(song.name)}
                                </button>
                                <button onClick={() => handleForward(audioRefs.current[index])}>⏩ 10s</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export { PlayList };


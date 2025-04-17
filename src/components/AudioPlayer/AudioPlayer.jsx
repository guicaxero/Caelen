import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import './AudioPlayer.css'
import { Eye, EyeOff, Pause, Play } from 'lucide-react';

export default function HowlPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const soundRef = useRef(null);
  const [showPlayer, setShowPlayer ] = useState(true)

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/assets/music.mp3'],
      loop: true,
      volume: volume
    });

    return () => {
      soundRef.current.unload();
    };
  }, []);

  const toggleSound = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    soundRef.current.volume(newVolume);
  };

  const toggleShowPlayer = () => {
    setShowPlayer(!showPlayer);
  }

  return (
    <>
        <button className='toggle-player' onClick={toggleShowPlayer}>
            {showPlayer ? <Eye/> : <EyeOff/>}
        </button>
        {showPlayer && (
            <div className={`player-container ${showPlayer ? 'show' : ''}`}>                
                <button onClick={toggleSound}>
                    Música Tema
                    {isPlaying ? <Pause size={20}/> : <Play size={20} />}
                </button>

                <label>
                    Volume:
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </label>
            </div>
        )}
    </>
  );
}

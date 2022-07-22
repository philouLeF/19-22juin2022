import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Song from '../pages/components/Song/Song';
import Audio from '../pages/components/Audio/Audio';

// pour plus tard => aller chercher les morceaux dans une db

const SONGS: Song[] = [
  {
    id: 0,
    title: 'Drunk In L.A.',
    artist: 'Beach House',
    file: 'songs/Beach House - Drunk In L.A..mp3',
    image: '/covers/beach house 7.jpg',
  },
  {
    id: 1,
    title: 'In The House, In A Hearbeat',
    artist: 'John Murphy',
    file: 'songs/John Murphy - In The House, In A Heartbeat.mp3',
    image: '/covers/john murphy 28 days later.jpg',
  },
  {
    id: 2,
    title: 'Sorry',
    artist: 'Madonna',
    file: 'songs/Madonna - Sorry.mp3',
    image: '/covers/madonna confessions on a dance floor.jpg',
  }
]

export const getStaticProps = async () => {
  const allSongs: Song[] = SONGS;
  return {
    props: {
      songs: allSongs
    },
    revalidate: 3600
  }
}

const Home: NextPage<{ songs: Song[] }> = ({ songs }) => {

  const [trackPlaying, setTrackPlaying] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <div className={styles.songPlaying}>
        <Song song={songs[trackPlaying]} isPlaying={isPlaying} />
      </div>
      <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} trackPlaying={trackPlaying} setTrackPlaying={setTrackPlaying} />
    </div>
  )
}

export default Home

// based on this tuto https://www.youtube.com/watch?v=nczamFOtdnI&t=1998s
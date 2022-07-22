import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  image: string;
}

// pour plus tard => aller chercher les morceaux dans une bdd

const SONGS: Song[] = [
  {
    id: 0,
    title: 'Drunk In L.A.',
    artist: 'Beach House',
    file: 'songs/Beach House - Drunk In L.A.',
    image: 'covers/beach house 7.jpg',
  },
  {
    id: 1,
    title: 'In The House, In A Hearbeat',
    artist: 'John Murphy',
    file: 'songs/John Murphy - In The House, In A Heartbeat',
    image: 'covers/john murphy 28 days later',
  },
  {
    id: 2,
    title: 'Sorry',
    artist: 'Madonna',
    file: 'songs/Madonna - Sorry',
    image: 'covers/madonna confessions on a dance floor',
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

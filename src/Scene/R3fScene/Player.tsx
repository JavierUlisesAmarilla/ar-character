// import {useXR} from '@react-three/xr'
import {useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'
import {Model} from '../Utils/Model'

export const Player = () => {
  // const player = useXR((state) => state.player)
  // useFrame(() => void (player.rotation.y += 0.0005))
  const bgAudio = useAudioPlayer()

  useEffect(() => {
    bgAudio?.load('audios/song.mp3', {loop: true})
    bgAudio.play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Model modelPath="models/golf.glb" rigidPos={[0, 0, -5]}/>
}

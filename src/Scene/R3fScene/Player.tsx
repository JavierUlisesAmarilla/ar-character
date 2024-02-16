import {Box, Environment} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useXR} from '@react-three/xr'


export const Player = () => {
  const player = useXR((state) => state.player)
  useFrame(() => void (player.rotation.y += 0.0005))

  return (
    <>
      <Environment preset="sunset" background/>
      <Box position={[0, 0.8, -1]} args={[0.4, 0.1, 0.1]}/>
    </>
  )
}

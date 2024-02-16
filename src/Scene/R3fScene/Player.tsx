// import {useXR} from '@react-three/xr'
import {Model} from '../Utils/Model'


export const Player = () => {
  // const player = useXR((state) => state.player)
  // useFrame(() => void (player.rotation.y += 0.0005))

  return (
    <Model
      modelPath='models/golf.glb'
      rigidPos={[0, 0, -5]}
    />
  )
}

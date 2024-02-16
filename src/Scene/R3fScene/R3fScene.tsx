/* eslint-disable react/no-unknown-property */
import {PerspectiveCamera} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Controllers, VRButton, XR} from '@react-three/xr'
import {Suspense} from 'react'
import {Player} from './Player'


export const R3fScene = () => {
  return (
    <Suspense>
      <VRButton/>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[10, 10, 10]}
        />
        <XR>
          <ambientLight intensity={0.5}/>
          <pointLight position={[5, 5, 5]}/>
          <Controllers/>
          <Player/>
        </XR>
      </Canvas>
    </Suspense>
  )
}

/* eslint-disable react/no-unknown-property */
import {Environment, OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {ARButton, Controllers, XR} from '@react-three/xr'
import {Suspense} from 'react'
import {Player} from './Player'


export const R3fScene = () => {
  return (
    <Suspense>
      <ARButton/>
      {/* <VRButton/> */}
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[10, 10, 10]}
        />
        <XR>
          <ambientLight intensity={0.5}/>
          <pointLight position={[5, 5, 5]}/>
          <Controllers/>
          <Environment preset="sunset" background/>
          <OrbitControls makeDefault/>
          <Player/>
        </XR>
      </Canvas>
    </Suspense>
  )
}

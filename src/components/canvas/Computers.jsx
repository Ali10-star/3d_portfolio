/* eslint-disable react/no-unknown-property */

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';
import { heroImg } from '../../assets';

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight groundColor={'black'} intensity={2}/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3.2, -1.2] : [0, -3.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <div className=' relative top-[10rem] mx-36 flex justify-end'>
      <img src={heroImg} alt="coding" className='h-[26rem] w-[32rem]'/>
    </div>
    // <Canvas
    //   frameloop='demand'
    //   shadows
    //   camera={{ position: [20, 3, 5], fov: 25 }}
    //   gl={{ preserveDrawingBuffer: true }}
    // >
    //   <Suspense fallback={<Loader />}>
    //     <OrbitControls
    //       enableZoom={false}
    //       maxPolarAngle={Math.PI / 2} // stops rotation after certain angle
    //       minPolarAngle={Math.PI / 2}
    //     />
    //     <Computers isMobile={isMobile}/>
    //   </Suspense>
    //   <Preload all />
    // </Canvas>
  )
}

export default ComputerCanvas;
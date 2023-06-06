import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';





export default function Skull() {
  const {scene } = useLoader(GLTFLoader, './src/skull2.gltf');
  scene.position.set(0, -1.2, 0);
  return (
    <>
      <OrbitControls
        enableDamping
        dampingFactor={0.03}
        autoRotate
        autoRotateSpeed={2}
      />

      

<directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
<directionalLight position={ [ -1, -2, -3 ] } intensity={ 0.5 } />

      <primitive object={scene}  scale={ 0.025 }/>
    </>
  );
}

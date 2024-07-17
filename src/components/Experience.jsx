/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import AeroBoy from './Aero-boy';
import ArcherKick from './ArcherKick';
import Ranger from './Ranger';
import Women from './Women';

const Experience = ({ character }) => {
    const characterRef = useRef();
    const lightRef = useRef();
    const cameraRef = useRef();

    useEffect(() => {
        if (cameraRef.current) {
            const tl = gsap.timeline({ defaults: { duration: 2, ease: 'power2.inOut' } });

            // Start the camera from above the character
            tl.fromTo(
                cameraRef.current.position,
                { y: 5, z: 2.5 },
                { y: 1.5, z: 5, onUpdate: () => cameraRef.current.updateProjectionMatrix() }
            )
                // Zoom out to a wider view
                .to(cameraRef.current.position, {
                    z: 5,
                    duration: 3,
                    ease: 'power2.inOut',
                })
                // Optional: Adjust field of view for a zoomed-out effect
                .to(cameraRef.current.fov, {
                    value: 70,
                    duration: 3,
                    ease: 'power2.inOut',
                    onUpdate: () => cameraRef.current.updateProjectionMatrix(),
                });

            // Infinite loop for camera to oscillate
            gsap.to(cameraRef.current.position, {
                z: 5,
                duration: 5,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true,
            });

            gsap.to(cameraRef.current.fov, {
                value: 50,
                duration: 5,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true,
                onUpdate: () => {
                    cameraRef.current.updateProjectionMatrix();
                }
            });

            // Character-specific animations
            switch (character) {
                case 'AeroBoy':
                    gsap.to(characterRef.current.rotation, {
                        y: 2 * Math.PI,
                        duration: 10,
                        repeat: -1,
                        ease: 'linear',
                    });
                    break;
                case 'Ranger':
                    gsap.to(characterRef.current.rotation, {
                        y: 2 * Math.PI,
                        duration: 10,
                        repeat: -1,
                        ease: 'linear',
                    });
                    break;
                case 'Women':
                    gsap.fromTo(characterRef.current.rotation,
                        { y: -Math.PI / 20 },
                        { y: Math.PI / 20, duration: 2, repeat: -1, yoyo: true, ease: 'power2.inOut' }
                    );
                    gsap.fromTo(characterRef.current.position,
                        { z: 0 },
                        { z: 1, duration: 3, repeat: -1, yoyo: true, ease: 'power2.inOut' }
                    );
                    break;
                case 'ArcherKick':
                    gsap.fromTo(characterRef.current.rotation,
                        { y: -Math.PI / 20 },
                        { y: Math.PI / 20, duration: 2, repeat: -1, yoyo: true, ease: 'power2.inOut' }
                    );
                    gsap.fromTo(characterRef.current.position,
                        { z: 0 },
                        { z: 1, duration: 3, repeat: -1, yoyo: true, ease: 'power2.inOut' }
                    );
                    break;
                default:
                    break;
            }
        }
    }, [character]);

    return (
        <>
            {character === 'AeroBoy' && (
                <>
                    <OrbitControls />
                    <ambientLight intensity={4} castShadow />
                    <directionalLight
                        ref={lightRef}
                        position={[2, 2, 2]}
                        intensity={1}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <group ref={characterRef} position={[0, -1, 0]}>
                        <AeroBoy />
                    </group>
                    <mesh
                        rotation={[-0.5 * Math.PI, 0, 0]}
                        position={[0, -1, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[10, 10, 1, 1]} />
                        <shadowMaterial transparent opacity={0.2} />
                    </mesh>
                </>
            )}
            {character === 'Ranger' && (
                <>
                    <OrbitControls />
                    <directionalLight
                        ref={lightRef}
                        castShadow
                        position={[2, 2, 2]}
                        intensity={9}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <group ref={characterRef} position={[0, -1, 0]}>
                        <Ranger />
                    </group>
                    <mesh
                        rotation={[-0.5 * Math.PI, 0, 0]}
                        position={[0, -1, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[10, 10, 1, 1]} />
                        <shadowMaterial transparent opacity={0.2} />
                    </mesh>
                </>
            )}
            {character === 'Women' && (
                <>
                    <OrbitControls />
                    <ambientLight />
                    <directionalLight
                        ref={lightRef}
                        position={[-5, 5, 5]}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <group ref={characterRef} position={[0, -1, 0]}>
                        <Women />
                    </group>
                    <mesh
                        rotation={[-0.5 * Math.PI, 0, 0]}
                        position={[0, -1, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[10, 10, 1, 1]} />
                        <shadowMaterial transparent opacity={0.2} />
                    </mesh>
                </>
            )}
            {character === 'ArcherKick' && (
                <>
                    <OrbitControls />
                    <ambientLight />
                    <directionalLight
                        ref={lightRef}
                        position={[-5, 5, 5]}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <group ref={characterRef} position={[0, -1, 0]}>
                        <ArcherKick />
                    </group>
                    <mesh
                        rotation={[-0.5 * Math.PI, 0, 0]}
                        position={[0, -1, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[10, 10, 1, 1]} />
                        <shadowMaterial transparent opacity={0.2} />
                    </mesh>
                </>
            )}
            <perspectiveCamera ref={cameraRef} position={[1, 1.5, 2.5]} fov={50} />
        </>
    );
};

export default Experience;

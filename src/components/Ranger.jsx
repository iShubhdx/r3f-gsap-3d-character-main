/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';

const Ranger = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./models/ranger.gltf');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    const action = actions[names[animationIndex]];
    if (action) {
      action.reset().fadeIn(0.5).play();
    }
    return () => {
      if (action) {
        action.fadeOut(0.5);
      }
    };
  }, [animationIndex, actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="RangerScene" scale={0.01}>
        <mesh geometry={nodes.Soldier_body.geometry} material={materials.Soldier_body1_ncl1_1} castShadow />
        <mesh geometry={nodes.Soldier_head_ncl1_1.geometry} material={materials.Soldier_body1} castShadow />
        <mesh geometry={nodes.Soldier_head_ncl1_1_1.geometry} material={materials.Soldier_head6} castShadow />
      </group>
    </group>
  );
};

export default Ranger;
useGLTF.preload('./models/ranger.gltf');

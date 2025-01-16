import { Text } from '@react-three/drei';
import { fadeOnBeforeCompile } from '../utils/fadeMaterial';

export const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={'left'}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          opacity={1}
          lineHeight={1}
          font={'./fonts/DMSerifDisplay-Regular.ttf'}
        >
          {title}
          <meshStandardMaterial
            transparent={true}
            alphaTest={0.5}
            opacity={1}
            color={'white'}
            emissive={'white'} // Menambahkan efek cahaya pada teks
            emissiveIntensity={1.5} // Menyesuaikan intensitas cahaya
            onBeforeCompile={fadeOnBeforeCompile} // Menambahkan onBeforeCompile
          />
        </Text>
      )}

      <Text
        color="white"
        anchorX={'left'}
        anchorY="top"
        fontSize={0.2}
        opacity={1}
        maxWidth={2.5}
        font={'./fonts/Inter-Regular.ttf'}
      >
        {subtitle}
        <meshStandardMaterial
          transparent={true}
          alphaTest={0.5}
          opacity={1}
          color={'white'}
          emissive={'white'} // Menambahkan efek cahaya pada teks
          emissiveIntensity={1.5} // Menyesuaikan intensitas cahaya
          onBeforeCompile={fadeOnBeforeCompile} // Menambahkan onBeforeCompile
        />
      </Text>
    </group>
  );
};

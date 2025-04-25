import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: {
          color: { value: 'transparent' }, // transparent background
        },
        particles: {
          number: { value: 80 }, // more particles
          move: { enable: true, speed: 0.5 }, // slow movement
          opacity: { value: 1 }, // fully visible
          size: { value: 20 }, // bigger hearts
          shape: {
            type: 'char',
            options: {
              char: {
                value: ['💖', '💕', '💗'],
                font: 'Verdana',
                style: '',
                weight: '400',
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

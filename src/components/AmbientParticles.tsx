import React, { useMemo } from 'react';

interface ParticleProps {
  enabled: boolean;
}

export const AmbientParticles: React.FC<ParticleProps> = ({ enabled }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.15,
      color: Math.random() > 0.3 ? 'bg-[#722F37]' : 'bg-[#D4C3A3]'
    }));
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${p.color} animate-particle`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  );
};

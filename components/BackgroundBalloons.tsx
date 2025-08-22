import React, { useMemo } from 'react';

const colors = ['#703E97', '#2A276E', '#F1CB14'];

const BackgroundBalloons: React.FC = () => {
  const shapes = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => {
      const size = Math.random() * 20 + 10; // size between 10 and 30
      return {
        id: i,
        color: colors[i % colors.length],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 40 + 20}s`, // 20 to 60 seconds for a slow turn
        animationDelay: `${Math.random() * 40}s`,
        size,
      };
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {shapes.map(shape => (
        <div
          key={shape.id}
          className="balloon" // Keep className to avoid changing other files
          style={{
            top: shape.top,
            left: shape.left,
            borderLeft: `${shape.size * 0.75}px solid transparent`,
            borderRight: `${shape.size * 0.75}px solid transparent`,
            borderBottom: `${shape.size}px solid ${shape.color}`,
            animationDuration: shape.animationDuration,
            animationDelay: shape.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBalloons;
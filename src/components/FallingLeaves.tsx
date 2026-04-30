import React, { useEffect, useState } from 'react';

const LEAF_COUNT = 18;
const LEAF_EMOJIS = ['🍂', '🍁', '🌿', '🍃'];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export const FallingLeaves: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const leaves = Array.from({ length: LEAF_COUNT }, (_, i) => ({
    id: i,
    emoji: LEAF_EMOJIS[Math.floor(Math.random() * LEAF_EMOJIS.length)],
    left: `${randomBetween(0, 100)}vw`,
    animationDuration: `${randomBetween(6, 14)}s`,
    animationDelay: `${randomBetween(0, 10)}s`,
    fontSize: `${randomBetween(16, 30)}px`,
    swayAmount: `${randomBetween(30, 80)}px`,
  }));

  return (
    <>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-60px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0.3; }
        }
        .leaf {
          position: fixed;
          top: -60px;
          pointer-events: none;
          z-index: 9999;
          animation: fall linear infinite;
        }
      `}</style>
      {leaves.map(leaf => (
        <span
          key={leaf.id}
          className="leaf"
          style={{
            left: leaf.left,
            fontSize: leaf.fontSize,
            animationDuration: leaf.animationDuration,
            animationDelay: leaf.animationDelay,
          } as React.CSSProperties}
        >
          {leaf.emoji}
        </span>
      ))}
    </>
  );
};

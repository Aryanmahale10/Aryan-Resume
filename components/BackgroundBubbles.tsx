import React from 'react';

const BackgroundBubbles: React.FC = () => {
    const bubbleCount = 15;
    const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
        const size = `${Math.random() * 5 + 1}rem`;
        const duration = `${Math.random() * 15 + 10}s`;
        const delay = `${Math.random() * -20}s`;
        const left = `${Math.random() * 100}%`;
        const bgOpacity = Math.random() * 0.15 + 0.05;
        const isBlue = Math.random() > 0.5;
        const bubbleColor = isBlue ? '59, 130, 246' : '217, 70, 239'; // Corresponds to dark-accent and dark-accent-end

        return (
            <div
                key={i}
                className="absolute bottom-0 rounded-full animate-float"
                style={{
                    width: size,
                    height: size,
                    left: left,
                    animationDuration: duration,
                    animationDelay: delay,
                    backgroundColor: `rgba(${bubbleColor}, ${bgOpacity})`,
                    boxShadow: `0 0 15px rgba(${bubbleColor}, ${bgOpacity * 2})`
                }}
            />
        );
    });

    return <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">{bubbles}</div>;
};

export default BackgroundBubbles;
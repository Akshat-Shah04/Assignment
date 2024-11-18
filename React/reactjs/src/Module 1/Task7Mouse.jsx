import React, { useEffect, useState } from 'react'

const Task7Mouse = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div style={{ height: "100vh" }}>
            <div
                style={{
                    position: "absolute",
                    top: position.y,
                    left: position.x,
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />
            <p>Task 3 : Move your mouse to see the element follow the cursor!</p>
        </div>
    );
};

export default Task7Mouse

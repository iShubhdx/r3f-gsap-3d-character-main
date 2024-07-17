/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const Welcome = ({ onComplete, title }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-4xl font-bold">
            <p className="animate-fadeInScale text-white p-4 rounded-lg">{title}</p>
        </div>
    )
}

export default Welcome
import gsap from 'gsap'
import React, { useState } from 'react'

const GSAPBasics = () => {
    const [animation, setAnimation] = useState(null)

    const handleAnimation = (type) => {
        setAnimation(type)
        switch (type) {
            case 'moveRight':
                gsap.to('.target-1', {
                    x: 360,
                    duration: 2,
                    borderRadius: "0",
                    rotate: 360,
                    ease: 'power2.out',
                    scale: 0.4
                })
                break
            case 'moveLeft':
                gsap.to('.target-1', {
                    x: 0,
                    rotate: -360,
                    duration: 2,
                    ease: 'power2.out',
                    borderRadius: "100%"
                })
                break
            case 'fadeIn':
                gsap.to('.target-1', {
                    opacity: 1,
                    duration: 2,
                    scale: 1,
                    ease: 'power2.out'
                })
                break
            case 'fadeOut':
                gsap.to('.target-1', {
                    opacity: 0,
                    duration: 2,
                    ease: 'power2.out'
                })
                break
            case 'scaleUp':
                gsap.to('.target-1', {
                    scale: 1.5,
                    duration: 1,
                    ease: 'power2.out'
                })
                break
            case 'scaleDown':
                gsap.to('.target-1', {
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out'
                })
                break
            case 'reset':
                gsap.killTweensOf('.target-1');
                gsap.set('.target-1', { x: 0, rotate: 0, opacity: 1, scale: 1, borderRadius: "100%" });
                break
            default:
                break
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
                    <h1 className="text-4xl font-bold text-white">
                        GSAP Animation Studio
                    </h1>
                    <div className="text-gray-400 text-sm flex space-x-2 items-center">
                        <span>Version 1.0.0</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>© 2024 Shubham Joshi</span>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <div className="relative grid place-items-center mb-6">
                        <div className="target-1 size-64 bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                        flex items-center justify-center rounded-full shadow-lg border-4 border-green-700" />
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4">
                        <button
                            onClick={() => handleAnimation('moveRight')}
                            className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            <svg className="w-4 h-4 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            Move Right
                        </button>
                        <button
                            onClick={() => handleAnimation('moveLeft')}
                            className="flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
                        >
                            <svg className="w-4 h-4 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Move Left
                        </button>
                        <button
                            onClick={() => handleAnimation('fadeIn')}
                            className="flex items-center justify-center px-3 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out"
                        >
                            <svg className="w-4 h-4 mr-2 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                            Fade In
                        </button>
                        <button
                            onClick={() => handleAnimation('fadeOut')}
                            className="flex items-center justify-center px-3 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
                        >
                            <svg className="w-4 h-4 mr-2 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                            Fade Out
                        </button>
                        <button
                            onClick={() => handleAnimation('scaleUp')}
                            className="flex items-center justify-center px-3 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
                        >
                            <svg className="w-4 h-4 mr-2 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l7-7 7 7"></path>
                            </svg>
                            Scale Up
                        </button>
                        <button
                            onClick={() => handleAnimation('scaleDown')}
                            className="flex items-center justify-center px-3 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"
                        >
                            <svg className="w-4 h-4 mr-2 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11l-7 7-7-7"></path>
                            </svg>
                            Scale Down
                        </button>
                        <button
                            onClick={() => handleAnimation('reset')}
                            className="flex items-center justify-center px-3 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"
                        >
                            Reset 🙅‍♂️
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                    <p>© 2024 GSAP Animation Studio by Shubham Joshi. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default GSAPBasics

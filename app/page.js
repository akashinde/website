"use client";

import Image from "next/image"
import { useState } from "react"

export default function About() {
    const [state, setState] = useState({
        show: false,
        class: '',
        name: 'RESUME',
    });

    function handleViewClick () {
        setState({
            show:!state.show,
            class: !state.show ? 'bg-black text-white' : '', 
            name: !state.show ? 'CLOSE' : 'RESUME'
        });
    }

    return (
        <>
            <div>
                <button onClick={handleViewClick} className={`p-2 mb-5 border cursor-pointer hover:bg-black hover:text-white ${state.class}`}>{state.name}</button>
            </div>
            {
                state.show
                ? 
                ( <iframe src="/Shinde_Resume.pdf" width="100%" height="600px"></iframe> )
                :
                (<>
                    <div className="mb-5 flex justify-center">
                        <Image
                        src="/image-removebg-preview.png"
                        alt="photo"
                        width={200}
                        height={200}
                        priority="true"
                        />
                    </div>
                    <div className="p-5 mb-5 leading-7 flex flex-col gap-3 border border-dashed hover:bg-black hover:text-white">
                        <p>👋 Hi there! I'm a problem solver with over 3 years of experience building scalable systems and creating smooth, user-friendly experiences.</p>
                        <p>I enjoy designing solid software architecture, writing clean, test-driven code, optimizing databases, and working with containers.</p>
                        <p>I'm passionate about maintainable code and love teaming up with others to bring great ideas to life.</p>
                    </div>
                </>)
            }
        </>
    )
}
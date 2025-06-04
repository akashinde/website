export default function Projects () {
    const data = [
        {
            title: 'Clone Vercel',
            stack: ['TypeScript', 'Node.js', 'React.js', 'Redis', 'AWS S3'],
            desc: 'This is clone of Vercel, deploy website using github repository.',
            href: 'https://github.com/akashinde/clone-vercel',
        },
        {
            title: 'BlogWave',
            stack: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Azure'],
            desc: 'Scalable blogging application which also handles change conflicts.',
            href: 'https://github.com/akashinde/blog-wave',
        },
        {
            title: 'Prompt Enhancer for TTIM',
            stack: ['Python'],
            desc: 'Improves user prompt with additional description using AI for better image generation.',
            href: 'https://github.com/akashinde/prompt-generator-for-TTIM',
        },
        {
            title: 'Identity Management using Blockchain',
            stack: ['Solidity', 'Node.js', 'React.js'],
            desc: 'Share identitiy securely.',
            href: 'https://github.com/akashinde/ManageiD',
        },
        {
            title: 'Track The Bug',
            stack: ['React', 'Node.js', 'MongoDB'],
            desc: 'Bug tracking application.',
            href: 'https://github.com/akashinde/track-the-bug',
        },
        {
            title: 'Task Scheduling Simulation',
            stack: ['React', 'JavaScript'],
            desc: 'Simulation how tasks are scheduled in operating systems.',
            href: 'https://github.com/akashinde/realtime-scheduling-simulation',
        },
        {
            title: 'Blockchain using Node.js',
            stack: ['Node.js', 'JavaScript'],
            desc: 'Simulated blockchain node creations and transactions.',
            href: 'https://github.com/akashinde/blockchain-in-nodejs',
        },
    ]

    return (<>
        <div className="mb-5 p-5 leading-7 sm:flex justify-between gap-3 border border-dashed hover:bg-black hover:text-white">
            <p className="text-lg mb-1 font-bold">Tech Stack</p>
            <div>
                <p>Java, JavaScript, TypeScript, Python</p>
                <p>Spring Boot, Node.js, Express.js, Flask</p>
            </div>
            <div>
                <p>SQL, MongoDB, PostgreSQL</p>
                <p>Redis, AWS, Azure, GitHub Actions</p>
            </div>
        </div>
        <div className="border mx-auto w-1/10 my-5"></div>
        <div className="grid sm:grid-cols-3 gap-5">
            {
                data.map((f, ind) => (
                    <a key={ind} 
                        className="p-2 pl-3 border border-dashed transition duration-300 
                            hover:bg-black 
                            hover:text-white 
                            hover:cursor-pointer 
                            hover:border-solid"
                        href={f.href} target="_blank"
                    >
                        <p className="text-lg mb-1 font-bold">{f.title}</p>
                        <p className="text-xs mb-3 text-gray-600">{f.stack.join(' . ')}</p>
                        <p className="text-sm">{f.desc}</p>
                    </a>
                ))
            }
        </div>
    </>)
}
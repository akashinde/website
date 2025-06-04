export default function Projects () {
    const data = [
        {
            title: 'Clone Vercel',
            stack: ['TypeScript', 'Node.js', 'React.js', 'Redis', 'AWS S3'],
            desc: 'This is clone of Vercel, deploy website using github repository.',
            href: '#',
        },
        {
            title: 'Identity Management using Blockchain',
            stack: ['Solidity', 'Node.js', 'React.js'],
            desc: 'Share identitiy securely.',
            href: '#',
        },
    ]

    return (<>
        <div className="grid grid-cols-3 gap-5">
            {
                data.map((f, ind) => (
                    <a key={ind} 
                        className="w-fit p-2 border border-dashed transition duration-300 
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
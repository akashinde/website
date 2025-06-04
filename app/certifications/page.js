export default function Certifications () {
    const data = [
        {
            title: 'DevOps Foundations: Containers',
            desc: 'May 2025',
            href: '#',
        },
        {
            title: 'What Is Generative AI?',
            desc: 'Dec 2024',
            href: '#',
        },
        {
            title: 'Learning TypeScript',
            desc: 'Oct 2024',
            href: '#',
        },
        {
            title: 'Git Workflows',
            desc: 'Nov 2023',
            href: '#',
        },
        {
            title: 'Docker for Developers',
            desc: 'Aug 2023',
            href: '#',
        },
        {
            title: 'JavaScript Essential Training',
            desc: 'Apr 2023',
            href: '#',
        },
        {
            title: 'React.js Essential Training',
            desc: 'Apr 2023',
            href: '#',
        },
        {
            title: 'Introduction to Blockchain Technologies',
            desc: 'Nov 2021',
            href: '#',
        },
        {
            title: 'React: SPAs',
            desc: 'Oct 2021',
            href: '#',
        },
    ]

    return (<>
        <div className="grid sm:grid-cols-2 gap-5">
            {
                data.map((f, ind) => (
                    <a key={ind} 
                        className="flex items-center justify-between p-2 border border-dashed transition duration-300
                            hover:bg-black 
                            hover:text-white 
                            hover:cursor-pointer 
                            hover:border-solid"
                        href={f.href} target="_blank"
                    >
                        <p className="text-lg mb-1 font-bold">{f.title}</p>
                        <p className="text-sm">{f.desc}</p>
                    </a>
                ))
            }
        </div>
    </>)
}
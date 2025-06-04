export default function Certifications () {
    const data = [
        {
            title: 'Cert1',
            desc: '2025',
            href: '#',
        },
        {
            title: 'Cert2',
            desc: '2021',
            href: '#',
        },
    ]

    return (<>
        <div className="grid grid-cols-2 gap-5">
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
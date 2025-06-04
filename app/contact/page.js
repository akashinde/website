export default function Contact () {
    const linkClass = "p-5 cursor-pointer hover:underline hover:bg-black hover:text-white transition ease-in-out"
    const data = [
        {
            name: 'outlook', url: '#',
        },
        {
            name: 'linkedin', url: '#',
        },
        {
            name: 'github', url: '#',
        },
    ]
    return (<>
        <div className="flex flex-col justify-around gap-5">
            { data.map((d, ind) => (
                <a key={ind} className={linkClass} href={d.url} target="_black">{d.name}</a>
            ))}
        </div>
    </>)
}
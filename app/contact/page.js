import Image from "next/image"

export default function Contact () {
    const linkClass = "p-5 cursor-pointer hover:underline hover:bg-black hover:text-white transition ease-in-out flex gap-2"
    const data = [
        {
            name: 'shinde10akash@outlook.com', url: 'mailto:shinde10akash@outlook.com',
        },
        {
            name: 'linkedin', url: 'https://www.linkedin.com/in/akashinde',
        },
        {
            name: 'github', url: 'https://github.com/akashinde',
        },
    ]
    return (<>
        <div className="flex flex-col justify-around gap-5">
            { data.map((d, ind) => (
                <a key={ind} className={linkClass} href={d.url} target="_black">{d.name} <Image alt="link" src="/arrow-top-right-on-square.svg" height={15} width={15} /> </a>
            ))}
        </div>
    </>)
}
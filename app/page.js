export default function Home() {
  const data = [
    {
      title: 'Will be here',
      desc: 'Senior developer',
    },
    {
      title: 'I am here',
      desc: 'Junior Developer',
    },
    {
      title: 'MSc Computer Science',
      desc: 'Frankfurt University of Applied Sciences',
    },
    {
      title: 'Junior Backend Developer',
      desc: 'Mumbai, India',
    },
    {
      title: 'BSc Information Technology',
      desc: 'Graduated 2020',
    },
  ]

  return (
    <div className="flex flex-wrap gap-5">
      {
        data.map((f, ind) => (
            <a key={ind} className="p-2 w-fit border">
                <p className="text-base mb-1">{f.title}</p>
                <p className="text-xs text-gray-600">{f.desc}</p>
            </a>
        ))
      }
    </div>
  );
}

import { useEffect } from "react";

const LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nrmurphy/',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nickrmurphy',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nickrmurphy_/',
  },
  {
    name: 'Blog',
    url: '#',
    current: true,
  },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function App() {
  useEffect(() => {
    document.body.classList.add('bg-slate-50');
  }, []);

  return (
    <div className="sm:px-6 lg:px-8 px-0 inset-x-0 py-10 fixed sm:inset-x-10 md:inset-x-16 lg:inset-x-24 xl:inset-x-36 justify-center bg-white h-full border shadow gap-y-5">
      <div className="text-center gap-y-10">
        <h1 className="text-4xl font-extrabold row-auto font-display">Nick Murphy</h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Software Engineer
        </p>
        {/* Links */}
        <nav className="isolate flex divide-x divide-gray-200 rounded-full m-2 border shadow-sm" aria-label="Tabs">
          {LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.url}
              target={link.current ? '' : '_blank'}
              className={classNames(
                idx === 0 ? 'rounded-l-full' : '',
                idx === LINKS.length - 1 ? 'rounded-r-full' : '',
                'group relative min-w-0 flex-1 overflow-hidden p-2 text-center text-sm font-medium hover:bg-slate-50 text-gray-600 hover:text-gray-900'
              )}
            >
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
      {/* Content */}
      <div className="mx-5 mt-10 gap-y-5 items-center justify-center">
        {/* About */}
        <div className="max-w-prose">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="mt-2 text-md  font-light leading-8 text-gray-600">
            I am a Software Engineer. I learned to write code in 2016, when I self-taught with the help of The Internet. I learned to how software worked while studying at Lewis Universty to attain a Bachelor’s degree in Computer Science in 2019. I learned how to build software products in the years since my first full time job as a developer shortly after. In the coming years, I aspire to learn how to build teams and businesses.
            <br />
            <br />
            To give the left brain a rest and wind down the analytical and plan-oriented bits of my mind, I improvise! Improv comedy, that is. It’s a great way to support creativity and mental health, while being active in a community I love — and hopefully make a few people laugh!
          </p>
        </div>
      </div>
    </div>
  );
}

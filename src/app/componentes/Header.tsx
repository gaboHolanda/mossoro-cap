import { Oswald } from 'next/font/google'


const oswald = Oswald({
  subsets: ['latin'],
  weight: [ '300', '400']
})

const links = [
    { name: 'Revendedores', href: '#' },
    { name: 'Pilotos', href: '#' },
    { name: 'Eventos', href: '#' },
    { name: 'Sobre Nós', href: '#' },
  ]

  
export default function Header() {
    return (
        <div style={{ backgroundColor: '#A6161D' }} className="relative isolate overflow-hidden py-5 sm:py-5">
          <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
            <div className="max-w-xs">
              <img
                src='logo_sem_fundo.png'
                alt=""
                className=""
                style={{ width: 250, maxHeight: 155 }}
              />
            </div>
            <div className="ml-10 col-span-3 mt-10 max-w-2xl lg:mx-0 lg:max-w-none" style={{ textShadow: '1px 1px 2px black' }}>
              <div className={"text-bottom font-semibold text-white sm:grid-cols-2 md:flex " + oswald.className}>
                {links.map((link) => (
                  <a key={link.name} href={link.href}  className='align-bottom mt-16 text-[16px] md:text-[22px] lg:text-[25px] hover:bg-red-900 py-2 px-4'>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
}
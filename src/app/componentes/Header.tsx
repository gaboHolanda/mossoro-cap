import { Alumni_Sans, Montserrat } from 'next/font/google'


const oswald = Alumni_Sans({
  subsets: ['latin'],
  weight: [ '300', '400']
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const links = [
    { name: 'Distribuidores', href: '#' },
    { name: 'Pilotos', href: '#' },
    { name: 'Eventos', href: '#' },
    { name: 'Sobre Nós', href: '#' },
  ]

  
export default function Header() {
    return (
        <div style={{ backgroundColor: '#C26641' }} className="relative isolate overflow-hidden">
          <div className=" grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
            <div className="max-w-xs p-5">
              <img
                src='logov3-positivo4x.png'
                alt=""
                className=""
                style={{ maxHeight: 95, minHeight:95, minWidth: 150 }}
              />
            </div>
            {<div className="col-span-4 mt-10 max-w-2xl lg:mx-0 lg:max-w-none" style={{ textShadow: '1px 1px 2px black' }}>
              <div className={"text-bottom font-semibold text-white sm:grid-cols-2 md:flex " + montserrat.className}>
                {links.map((link) => (
                  <a key={link.name} href={link.href} className='align-bottom mt-10 text-[16px] md:text-[22px] lg:text-[28px] px-3'>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>}
          </div>
        </div>
    )
}
import { Montserrat, Alumni_Sans } from "next/font/google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from '@mui/material/Link';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Alumni_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

interface Revendedor {
  data: {
    numeros: [];
    image: string;
    imageLabel: string;
    nome: string;
    descricao: string;
    instagram: string;
  };
}

export default function Revendedor(props: Revendedor) {
  const { data } = props;
  return (
    <div style={{ backgroundColor: '#DBDBD3' }}>
      <section>
        <section style={{ color: '#282D27' }} className="body-font">
          <div className="container px-5 py-2 mx-auto">
            <div style={{ backgroundColor: 'rgba(227, 115, 26, 0.6)', borderColor: '#C26641'}} className="p-5 border flex items-center mx-auto mb-10 rounded-lg sm:flex-row flex-col">
              <div className="sm:w-52 sm:h-52 h-40 w-40 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img className="rounded-lg" src={data.image} />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1
                  className={
                    "text-3xl title-font font-bold mb-1 " +
                    montserrat.className
                  }
                  style={{ color: '#282D27' }}
                >
                  {data.nome}
                </h1>
                <div className={"pb-3 ml-2 text-xl font-bold " + oswald.className}>
                  {data.descricao}
                </div>
                {data.numeros.map((numero, index) => (
                  <div
                    key={index}
                    className="flex items-middle mb-2 ml-2"
                    style={{ color: '#282D27' }}
                  >
                    <WhatsAppIcon sx={{ width: 30, height: 30 }} />
                    <div className="inline-block align-text-top">
                      <p className={"leading-relaxed text-xl ml-1 " + oswald.className}>
                        {numero}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-middle mb-2 ml-2" style={{ color: '#282D27' }}>
                  <InstagramIcon sx={{ width: 30, height: 30 }} />
                  <Link target="_blank" underline="none" href={"https://www.instagram.com/"+data.instagram} style={{ color: '#DBDBD3' }} className={"leading-relaxed text-xl ml-1 " + oswald.className}>
                    @{data.instagram}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

import { Montserrat, Oswald } from "next/font/google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from '@mui/material/Link';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
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
    <div className="bg-white">
      <section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-2 mx-auto">
            <div className="p-5 bg-red-200 flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
              <div className="sm:w-52 sm:h-52 h-40 w-40 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src={data.image} />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1
                  className={
                    "text-black text-3xl title-font font-bold mb-1 " +
                    montserrat.className
                  }
                >
                  {data.nome}
                </h1>
                <div className={"pb-3 ml-2 text-md " + oswald.className}>
                  {data.descricao}
                </div>
                {data.numeros.map((numero, index) => (
                  <div
                    key={index}
                    className="flex text-black items-middle mb-1 ml-2"
                  >
                    <WhatsAppIcon sx={{ width: 30, height: 30 }} />
                    <div className="inline-block align-text-top">
                      <p className={"leading-relaxed text-lg ml-1 " + oswald.className}>
                        {numero}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex text-black items-middle mb-1 ml-2">
                  <InstagramIcon sx={{ width: 30, height: 30 }} />
                  <Link target="_blank" underline="none" href={"https://www.instagram.com/"+data.instagram} className={"leading-relaxed text-lg text-red-800 ml-1 " + oswald.className}>
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

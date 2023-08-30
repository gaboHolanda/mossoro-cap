import Revendedor from "./Revendedor";
import { Montserrat, Alumni_Sans } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Alumni_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const revendedores = [
  {
    numeros: ["(84) 99630-0190", "(84) 99630-0232"],
    descricao: "Distribuidora de Peças e Acessórios para Motocicletas",
    cobertura: "RN",
    instagram: "motolubdistribuidora",
    image: "/logo_motolub.png",
    imageLabel: "logo moto lub",
    nome: "MotoLub Distribuidora",
  },
  {
    numeros: [
      "Rio Grande do Norte: (84) 99870-2322, (84)99870-2300 ",
      "Paraíba: (84) 99705-9494 ",
    ],
    cobertura: "RN, PB, PE e CE",
    descricao: "Desde 1998 Líder em Moto Peças",
    instagram: "pmpdistribuidora",
    image: "/logo_pmp.png",
    imageLabel: "logo pmp",
    nome: "PMP Distribuidora",
  },
];

export default function index() {
  return (
    <>
      <div

        className={
          "pl-20 title-font font-bold  " +
          oswald.className
        }

        style={{ backgroundColor: '#DBDBD3', color: '#282D27', fontSize: '55px' }}
      >
        Distribuidores
      </div>
      {revendedores.map((revendedor, index) => {
        return <Revendedor key={index} data={revendedor} />;
      })}
    </>
  );
}

import MainPost from "./MainPoster";
import FeaturedPost from "./FeaturesPost";
import { Montserrat, Oswald } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
});

const mainFeaturedPost = {
  title: "Qualidade, Confiança e Satisfação",
  description: "Desde 2009 transformamos pneus velhos em novos.",
  image: "/moto_passando_logo.jpg",
  imageText: "Moto passando em cima de uma logo da MossoroCap",
  linkText: "Continue reading…",
};

const featuredPosts = {
  title: "Sustentabilidade",
  image: "/reciclagem_semfundo.png",
  imageLabel: "Image Text",
  className: montserrat.className,
};

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hiddenx">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="grid max-w-2xl grid-cols-1 gap-x-52 gap-y-16  lg:max-w-none lg:grid-cols-8 lg:items-start lg:gap-y-5">
        <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8 pt-5">
          <div className="lg:pr-4 pl-9">
            <div className="">
              <h1
                className={
                  "mt-2 text-3xl title-font font-bold  tracking-tight text-black sm:text-5xl " +
                  montserrat.className
                }
              >
                MOSSOROCAP
              </h1>
              <p
                className={
                  "mt-3 ml-3 text-xl leading-8 text-black " + oswald.className
                }
              >
                Da velhice à renovação: há mais de uma década redefinimos pneus
                de Moto!
              </p>
            </div>
            <div className="ml-3">
              <div className="lg:pr-2 mt-5">
                <div className="max-w-xl text-base leading-7 text-black lg:max-w-2xl">
                  <FeaturedPost
                    key={featuredPosts.title}
                    post={featuredPosts}
                  />
                  <div
                    className={
                      "text-xl font-bold my-4 mt-8 tracking-tight text-black sm:text-3xl " +
                      montserrat.className
                    }
                  >
                    Atuamos de forma sustentável!
                  </div>
                  <p className={"text-lg mt-5 " + oswald.className}>
                    Por ser feito de material que seria descartado no meio
                    ambiente, o pneu <b>REMOLD</b> contribui para a diminuição
                    do lixo, além de utilizar uma menor quantidade de petróleo
                    na sua produção, em comparação a um pneu novo.
                  </p>
                  <p className={"text-lg mt-5 " + oswald.className}>
                    Desempenhamos um papel importante na sustentabilidade
                    ambiental, reduzindo resíduos e promovendo a economia local.
                    Além de reutilizar pneus descartados, contribuímos para a
                    conservação de recursos naturais e a diminuição do impacto
                    ambiental..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 py-5 ml-2 lg:sticky lg:top-4 col-span-5 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <MainPost post={mainFeaturedPost} />
        </div>
      </div>
    </div>
  );
}

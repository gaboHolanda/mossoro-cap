import MainPost from "./MainPoster";
import FeaturedPost from "./FeaturesPost";
import { Montserrat, Alumni_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Alumni_Sans({
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
  className: oswald.className,
};

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hiddenx">
      <div
        style={{ backgroundColor: "#DBDBD3" }}
        className="absolute inset-0 -z-10"
      />
      <div className="grid  grid-cols-3 sm:grid-cols-4 gap-x-48 gap-y-16  lg:max-w-none lg:grid-cols-7 lg:items-start lg:gap-y-5">
        <div className="md:col-span-4 col-span-3 sm:col-span-4  lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8 pt-5">
          <div className="lg:pr-4 pl-12">
            <div className="">
              <h1
                className={
                  "mt-2 title-font font-bold  tracking-tightsm:text-5xl " +
                  oswald.className
                }
                style={{ color: "#282D27", fontSize: "55px" }}
              >
                MOSSOROCAP
              </h1>
              <p
                className={
                  "mt-3 ml-3 text-xl leading-8 " + montserrat.className
                }
                style={{ color: "#282D27" }}
              >
                Da velhice à renovação: há mais de uma década redefinimos pneus
                de Moto!
              </p>
            </div>
            <div>
              <div className="lg:pr-2 mt-5">
                <div
                  style={{ color: "#282D27" }}
                  className="max-w-xl text-base leading-7 lg:max-w-2xl"
                >
                  <FeaturedPost
                    key={featuredPosts.title}
                    post={featuredPosts}
                  />
                  <div
                    className={
                      "font-bold mt-8 tracking-tight sm:text-3xl " +
                      oswald.className
                    }
                    style={{ color: "#282D27", fontSize: "55px" }}
                  >
                    Atuamos de forma sustentável!
                  </div>
                  <div className="ml-3">
                    <p className={"text-lg mt-5 " + montserrat.className}>
                      Por ser feito de material que seria descartado no meio
                      ambiente, o pneu <b>REMOLD</b> contribui para a diminuição
                      do lixo, além de utilizar uma menor quantidade de petróleo
                      na sua produção, em comparação a um pneu novo.
                    </p>
                    <p className={"text-lg mt-5 " + montserrat.className}>
                      Desempenhamos um papel importante na sustentabilidade
                      ambiental, reduzindo resíduos e promovendo a economia
                      local. Além de reutilizar pneus descartados, contribuímos
                      para a conservação de recursos naturais e a diminuição do
                      impacto ambiental..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 pr-24 py-5 ml-2 lg:sticky lg:top-4 col-span-4 lg:col-span-4 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <MainPost post={mainFeaturedPost} />
        </div>
      </div>
    </div>
  );
}

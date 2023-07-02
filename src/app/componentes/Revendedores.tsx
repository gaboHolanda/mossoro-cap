import MainPost from './MainPoster'
import FeaturedPost  from './FeaturesPost';

const mainFeaturedPost = {
    title: 'Qualidade, Confiança e Satisfação',
    description:
      "Desde 2009 transformamos pneus velhos em novos.",
    image: '/moto_passando_logo.jpg',
    imageText: 'Moto passando em cima de uma logo da MossoroCap',
    linkText: 'Continue reading…',
  };

  const featuredPosts = {
      title: 'Sustentabilidade',
      image: '/Recliclagem.jpg',
      imageLabel: 'Image Text',
    }



export default function Revendedores(){
    return (
        <div className="relative isolate overflow-hidden p-20" >
            <div className="absolute inset-0 -z-10 bg-white" />
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-52 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Quem Somos</h1>
                            <p className="mt-3 text-xl leading-8 text-black" style={{ fontFamily: 'roboto' }}>
                                Da velhice à renovação: há mais de uma década redefinimos pneus de Moto!
                            </p>
                        </div>

                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 ml-2 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <MainPost post={mainFeaturedPost} />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-2">
                        <div className="max-w-xl text-base leading-7 text-black lg:max-w-2xl">
                        <FeaturedPost key={featuredPosts.title} post={featuredPosts} />
                        <div className='text-xl font-bold my-4 tracking-tight text-black sm:text-3xl'>
                            A MOSSOROCAP atua de forma sustentável. 
                        </div>
                        <p className='text-lg mt-5' style={{ fontFamily: 'roboto' }}>
                            Por  ser feito de material que seria descartado no meio ambiente, o pneu remold contribui para a diminuição do lixo, 
                            além de ser utilizado uma menor quantidade de petróleo na sua produção do que em pneus novos.
                        </p>
                        <p className='text-lg mt-5' style={{ fontFamily: 'roboto' }}>
                            Desempenhamos um papel importante na sustentabilidade ambiental, reduzindo resíduos e promovendo a economia local. 
                            Além de reutilizar pneus descartados, contribuímos para a conservação de recursos naturais e a diminuição do impacto ambiental..
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
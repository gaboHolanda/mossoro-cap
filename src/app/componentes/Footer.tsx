export default function Footer() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-20 ">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_center,theme(colors.black),red)] opacity-20" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto h-60"
          src="/logo_sem_fundo.png"
          alt="logo mossorocap"
        />
        <figure className="mt-10">
          <blockquote
            className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9"
            style={{ textShadow: "1px 1px 2px black" }}
          >
            <p>
              Qualidade, Confiança e Satisfação que mantém você no controle.
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

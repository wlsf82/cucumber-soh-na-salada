/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/MssfgqSskfT
 */
import Link from "next/link"
import Image from 'next/image'

export function LandingPage() {
  return (
    (<div>
      <nav className="bg-green-300 dark:bg-green-800 px-6 py-4">
        <div className="flex justify-between items-center">
          <a className="text-6xl font-bold text-gray-800 dark:text-white" href="#">
            🥒🥗
          </a>
          <div className="space-x-4">
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              href="https://talkingabouttesting.com/2021/07/08/usando-dado-quando-entao-sem-cucumber-com-cypress/">
              Blog
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              href="https://youtube.com/live/Pk3i9sh-55M?feature=share">
              YouTube
            </Link>
          </div>
        </div>
      </nav>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-200 dark:bg-green-700">
        <div className="container px-4 md:px-6">
          <div
            className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              src="https://tweets-codecademy.s3.eu-central-1.amazonaws.com/cucumber-salad.jpeg"
              alt="Cucumber salad"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width={500}
              height={310}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-5xl">
                  Cucumber só na salada
                </h2>
                <p
                  className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore opções mais simples para testes de software automatizados, sem a necessidade do uso de
                  cucumber e das palavras-chave Dado/Quando/Então.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
                  href="https://youtu.be/zcoAWehiZzg?si=dHkakWtEnk2B8L2e">
                  Saiba mais
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white dark:focus-visible:ring-gray-300"
                  href="https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?referralCode=5E367E0C332F3B967B6C">
                  Comece agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2
            className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-5xl mb-8">
            Os problemas do Cucumber
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Mais software</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Para utilizar cucumber, mais software precisa ser instalado e configurado, trazendo mais complexidade (sem grandes benefícios).
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">RegExp</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Cucumber utiliza expressões regulares para que texto no formato Dado/Quando/Então seja interpretado para código executável. Ou seja, de qualquer forma código será necessário.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Falsa colaboração</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Vende-se o uso de cucumber como a solução para colaboração entre pessoas técnicas e pessoal de negócios, mas isso não se resolve com ferramentas e sim com uma cultura colaborativa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-200 dark:bg-green-700">
        <div className="container px-4 md:px-6">
          <h2
            className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-5xl mb-8">
            As vantagens de não usar Cucumber
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Simplicidade</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Ao optar por não usar cucumber, sua suite de testes automatizados será mais simples de escrever, manter e atualizar, visto que não haverá a necessidade de plugins ou softwares adicionais.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Time responsável pelos testes</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Sem o uso de cucumber, é mais fácil que o time de desenvolvimento se responsabilize por criar, manter e atualizar testes automatizados. A final de contas, eles são os principais beneficiários dos testes.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Testes em uma linguagem que o time entende</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Deixando o time escrever testes automatizados na linguagem de programação que já estão acostumados os permite desenvolver uma suite de testes robusta e otimizada, assim como o código da aplicação sendo testada.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-5xl mb-8">
            Vídeos relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="360px"
                src="https://youtube.com/embed/si5mSwZ_m2U?si=i1G9IZNeLSY9C1gZ"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Cucumber só na salada"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="360px"
                src="https://youtube.com/embed/BGz0Nm83Xn8?si=Yb0aM_del9Li5Lqw"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="BDD é muito mais que cucumber"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-200 dark:bg-green-700">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-5xl mb-8">
            Compartilhe
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Compartilhe esta página em suas redes sociais com as <i>hashtags</i> #CucumberSóNaSalada #EuNãoUsoCucumber e
            #TalkingAboutTesting
          </p>
        </div>
      </section>
      <footer className="w-full py-4 bg-gray-800 text-center text-white">
        <p>Copyleft 😜 2023 - Talking About Testing</p>
      </footer>
    </div>)
  )
}

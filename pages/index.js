import Head from 'next/head'
import Header from '../components/Header'
import logo from "./../public/img/linkedinlogo.svg"


export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header logo={logo}/>

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <h1>Hello </h1>
      </main>

      </div>
  )
}

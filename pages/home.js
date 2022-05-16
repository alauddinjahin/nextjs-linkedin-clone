import { ArrowForwardIosRounded, BusinessCenter, Explore, Group, OndemandVideoSharp } from '@mui/icons-material'
import Image from 'next/image'
import HeaderLink from '../components/HeaderLink'
import logo from './../public/img/linkedin.svg'
import coverPhoto from './../public/img/homecover.svg'
import Head from 'next/head'
import { useSession, signIn, signOut, getProviders } from "next-auth/react"

const Home = ({ providers }) => {
    const { data: session } = useSession()
    // console.log(logo);

    // signIn('google')

  return (
    <div className='space-y-10 relative'>
        <Head>
            <title>LinkedIn {session ? `|${session?.user?.name}` : ''}</title>
            <meta name="description" content="LinkedIn Clone App By Alauddin Jahin" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className='flex justify-around items-center py-5'>
            <div className='relative w-36 h-10'>
                <Image src={logo} layout="fill" objectFit='contain' />
            </div>
            <div className='flex items-center sm:divide-x divide-gray-300'>
                <div className='hidden sm:flex space-x-8 pr-4'>
                    <HeaderLink Icon={Explore} text="Discover" />
                    <HeaderLink Icon={Group} text="People" />
                    <HeaderLink Icon={OndemandVideoSharp} text="Learning" />
                    <HeaderLink Icon={BusinessCenter} text="Jobs" />
                </div>
                <div className='pl-1'>
                    {
                        !session ? (
                            <>
                                <button className='font-semibold text-black/50 mr-2 px-3 py-1.5 hover:bg-black/10'>Join now</button>
                                <button onClick={() => signIn() } className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2 hover:bg-blue-50'>
                                    Sign in
                                </button>

                                  {/* {Object.values(providers).map((provider) => (
                                      <div key={provider.name}>
                                          <div className="pl-4">
                                              <button
                                                  className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2 hover:bg-blue-50'
                                                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                                              >
                                                  Sign in
                                              </button>
                                          </div>
                                      </div>
                                  ))} */}
                            </>
                        ):(
                            <button onClick={() => signOut()} className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2 hover:bg-blue-50 ml-2'>
                                Sign out
                            </button>
                        )
                    }
                </div>
            </div>

        </header>

        <main className='flex flex-col xl:flex-row items-center max-w-screen-xl mx-auto mt-10'>
            <div className="space-y-6 xl:space-y-10">
                <h1 className='text-3xl md:text-6xl text-amber-800/80 max-w-xl !leading-snug font-[200]'>Welcome to your professional community</h1>
                <div className="space-y-4">
                    <div className="intent">
                        <h2 className='text-xl'>Search for a job</h2>
                        <ArrowForwardIosRounded className='text-gray-700' />
                    </div>

                    <div className="intent">
                        <h2 className='text-xl'>Find a Person you know</h2>
                        <ArrowForwardIosRounded className='text-gray-700' />
                    </div>

                    <div className="intent">
                        <h2 className='text-xl'>Learn a new skill</h2>
                        <ArrowForwardIosRounded className='text-gray-700' />
                    </div>
                </div>
            </div>
              <div className='relative xl:absolute w-80 h-80 xl:w-[700px] xl:h-[560px] mt-[100px] xl:right-80' >
                  <Image src={coverPhoto} layout="fill" objectFit='contain' priority/>
            </div>
        </main>
    </div>
  )
}

export default Home



// export async function getServerSideProps(context) 
export async function getStaticProps(context) 
{
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
        revalidate: 10
    };
}
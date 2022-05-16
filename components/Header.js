import { AppsOutlined, BusinessCenter, Chat, Group, HomeRounded, Notifications, SearchRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import HeaderLink from './HeaderLink';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
// import { useTheme } from '@emotion/react';
import { useTheme } from "next-themes";
import { getSession, useSession } from 'next-auth/react';
import logoLight from "./../public/img/linkedin-3-xxl.png"

//https://dev.to/andrewbaisden/the-complete-modern-react-developer-2022-3257


const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};

const Header = ({ logo }) => {

    
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme, theme } = useTheme();
    const { data: session } = useSession()

    useEffect(() => setMounted(true), []);


  return (
      <header className='sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg'>
        {/* left  */}
        <div className="flex items-center space-x-2 w-full max-w-xs">
              {mounted && (
                  <>
                      {resolvedTheme !== "dark" ? (
                          <Image src={logoLight} width={45} height={45} />
                      ) : (
                            <div className='relative h-10 w-36'>
                                <Image src={logo} layout="fill" objectFit='contain' />
                            </div> 
                      )}
                  </>
              )}

            <div className='flex items-center space-x-1 dark:md:bg-gray-700 w-full py-2.5 px-4 rounded'>
              <SearchRounded />
              <input type={"search"} 
              name="searchitem" 
              placeholder='Search' 
              className='md:inline-flex hidden bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow' />
            </div>
        </div>

        {/* right  */}
        <div className='flex items-center space-x-6'>
              <HeaderLink Icon={HomeRounded} text="Home" feed active />
              <HeaderLink Icon={Group} text="My Network" feed />
              <HeaderLink Icon={BusinessCenter} text="Jobs" feed hidden />
              <HeaderLink Icon={Chat} text="Messaging" feed />
              <HeaderLink Icon={Notifications} text="Notifications" feed />
              <HeaderLink Icon={Avatar} text="Me" feed avatar={session?.user?.image} hidden />
              <HeaderLink Icon={AppsOutlined} text="Work" feed hidden />

              {/* dark mode  */}
              {
                  mounted && (
                      <div onClick={() =>
                          setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      }
                          className={`bg-gray-600 flex items-center rounded-full px-0.5 h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === "dark" ? "justify-end" : "justify-start"}`}>
                          <span className="absolute left-0">🌜</span>
                          <motion.div
                              className="w-5 h-5 bg-white rounded-full z-40"
                              layout
                              transition={spring}
                          />

                          <span className="absolute right-0.5">🌞</span>
                      </div>
                  )
              }
        </div>


    </header>
  )
}

export default Header


// export async function getServersideProps(context) {
//     const session = await getSession(context)

//     console.log('====================================');
//     console.log(session, 'xxx');
//     console.log('====================================');

//     return {
//         props: {
//             user
//         }
//     }
// }

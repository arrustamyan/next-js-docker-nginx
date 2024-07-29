import Image from 'next/image'
import Link from 'next/link'
import { BurgerMenu } from '@/components/burgerMenu/BurgerMenu'
import { Navigation } from '@/components/navigation/Navigation'

export const Header = () => {

  return (
    <div className='flex w-full font-new-york-small relative justify-between items-center h-16 md:h-36 px-5 md:px-14 after:absolute after:left-0 after:h-px after:w-full after:bottom-0 after:bg-[#d6d6d6] max-w-[1440px] mx-auto after:shadow-[0_0_0_100vmax_#d6d6d6] after:[clip-path:inset(0-100vmax)]'>
      <Link href={'/'} className='block relative w-56 h-5 md:w-72 md:h-8 lg:h-10 lg:w-96'>
        <Image width={384}  height={40} alt='Nordic Rose' src={'/mainLogo.svg'}/>
      </Link>
      <div className='hidden md:block'>
        <Navigation
          links={[
            {
              link: '/',
              label: 'blog',
            },
            {
              link: '/about',
              label: 'about',
            },
            {
              link: '/links',
              label: 'links',
            },
            {
              link: '/projects',
              label: 'projects',
            }
          ]}
        />
      </div>
      <div className='md:hidden'>
        <BurgerMenu />
      </div>
    </div>
  )

}

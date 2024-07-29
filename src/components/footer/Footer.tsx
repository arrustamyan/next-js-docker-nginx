import Image from 'next/image'
import Link from 'next/link'
import { Ticker } from '@/components/ticker/Ticker'

export const Footer = () => {
  return (
    <div className='bg-black text-white py-8 mt-auto'>
      <Ticker
        content={['Growth', 'Strategy', 'Suspense', 'Creativity', 'UX design', 'Remote work', 'Distributed teams', 'Digital product design']}
      />
      <div className='w-72 md:w-96 mx-auto text-center mt-28'>
        <div className='w-60 md:w-72 h-5 md:h-7 relative mx-auto'>
          <Image width={288} height={28} alt='Nordic Rose' src={'/mainLogoWhite.svg'} />
        </div>
        <span className='block my-8 text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
        </span>
        <div className='flex items-center gap-4 font-SF-pro-text mx-auto justify-center text-sm md:text-base'>
          <Link className='underline' href={'/'}>Twitter</Link>
          <Link className='underline' href={'/'}>LinkedIn</Link>
          <Link className='underline' href={'/'}>RSS</Link>
        </div>
      </div>
      <span className='mx-auto mt-16 font-SF-pro-text block text-center text-xs'>© 2024 Nordic Rose Co. <br /> All rights reserved.</span>
    </div>
  )
}

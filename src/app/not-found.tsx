'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {

  return (
    <div className='px-16 py-20'>
      <div className='flex flex-col w-fit gap-8 items-center mx-auto'>
        <Image width={800} height={500} src={'/not-found.jpg'} alt='404' />
        <Link className='border border-gray-300 rounded-md py-2 px-4' href={'/'}>Go to home page</Link>
      </div>
    </div>
  )
}

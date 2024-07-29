'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigation = ({
  links,
}: any) => {
  const pathName = usePathname()

  return (
    <div className='uppercase relative text-base lg:text-xl'>
      <div className='mx-auto'>
        <div className={`flex items-center justify-between gap-5`}>
          {
            links.map((link: any, index: any) => {
              return (
                <Link
                  key={index} scroll={false} className={`relative py-2.5 after:invisible after:rounded-3xl  after:h-0.5 after:z-10 after:left-0 md:after:-bottom-[3.15rem] lg:after:-bottom-12 z-1 after:absolute after:bg-black after:w-full ${pathName === (link.link) ? 'after:!visible' : ''}`} href={link.link} >
                  <span>{link.label}</span>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

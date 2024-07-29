'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { CloseIcon } from '@/components/icons/CloseIcon'

export const BurgerMenu = () => {
  const ref: any = useRef()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      let touchStart: number
      let touchMove: number
      let scroll: boolean = false
      const screenWidth = document.getElementsByTagName('body')[0].offsetWidth
      const menuWidth = ref.current.offsetWidth

      const trackScroll = () => {
        scroll = true
      }

      const disableSwipe = () => {
        ref.current.style.cssText = `
          transform:translateX(0%) !important
          `
      }

      const onTouchEnd = (e: any) => {
        if (!scroll) {
          if (menuWidth / 4 < touchMove - touchStart) {
            ref.current.style.cssText = `
              transform:translateX(100%)
              transition-duration:300ms
              `
            setShowMenu(false)
          }
          else {
            ref.current.style.cssText = `
              transform:translateX(0%)
              transition-duration:300ms
              `
            setShowMenu(true)
          }
        }
        touchMove = 0
        scroll = false
        ref.current?.removeEventListener('touchmove', onTouchMove)
        document.removeEventListener('touchend', onTouchEnd)
        ref.current.removeEventListener('scroll', disableSwipe)
      }

      const onTouchMove = (e: any) => {
        touchMove = e.touches[0].clientX
        if (touchStart > screenWidth - menuWidth && touchMove - touchStart > 0 && !scroll) {

          ref.current.style.cssText = `
            transform:translateX(${touchMove - touchStart}px)
            transition-duration:0s
            overflow-y:hidden
            `
          ref.current.addEventListener('scroll', disableSwipe)
        }
        document.addEventListener('touchend', onTouchEnd)
      }

      const onTouchStart = (e: any) => {
        ref.current.style.cssText = `
          transform: unset
          `
        touchStart = e.touches[0].clientX
        ref.current?.addEventListener('touchmove', onTouchMove)
      }

      ref.current.addEventListener('scroll', trackScroll)

      document.addEventListener('touchstart', onTouchStart)
      return () => {
        document.removeEventListener('touchstart', onTouchStart)
        ref.current?.removeEventListener('scroll', trackScroll)
      }
    }
  }, [showMenu])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body
      const html = document.getElementsByTagName('html')[0]
      const bodyRect = body.getBoundingClientRect()
      const top = bodyRect.top

      if (showMenu) {
        if (window.innerHeight + 1 < body.scrollHeight) {
          body.style.cssText = `
         overflow-y: scroll
         position:fixed
         inset: 0
         bottom: unset
         top: ${top}px
         overscroll-behavior:none
         `
          html.style.cssText = `
         overscroll-behavior:none
         `
        }
      }
      else {
        body.style.cssText = `
       overflow-y: auto
       `
        html.style.cssText = `
       `
        window.scrollTo(0, -top)
      }
    }
  }, [showMenu])

  return (
    <>
      <div
        className='p-1 mb-2'
        onClick={() => setShowMenu(!showMenu)}
      >
        <MenuIcon />
      </div>
      <div ref={ref} className={`max-h-[100dvh] h-screen overflow-auto w-[343px] z-20 fixed right-0 top-0 transition duration-300 bg-white  ${showMenu ? 'translate-x-0 burger-menu-opened' : '!translate-x-full'}`}>
        <div
          onClick={() => setShowMenu(false)}
          className='absolute right-4 top-4 p-1'>
          <CloseIcon
            color='#1F1F1F'
          />
        </div>
        <div className='uppercase flex flex-col items-center mt-20 gap-10'>
          <Link onClick={() => { setShowMenu(false) }} className={`transition duration-200 ${showMenu ? 'translate-x-0 delay-200 opacity-100':'translate-x-20 delay-300 opacity-0'}`} href={'/'}>blog</Link>
          <Link onClick={() => { setShowMenu(false) }} className={`transition duration-200 ${showMenu ? 'translate-x-0 delay-300 opacity-100':'translate-x-20 delay-300 opacity-0'}`} href={'/about'}>about</Link>
          <Link onClick={() => { setShowMenu(false) }} className={`transition duration-200 ${showMenu ? 'translate-x-0 delay-[400ms] opacity-100':'translate-x-20 delay-300 opacity-0'}`} href={'/links'}>links</Link>
          <Link onClick={() => { setShowMenu(false) }} className={`transition duration-200 ${showMenu ? 'translate-x-0 delay-500 opacity-100':'translate-x-20 delay-300 opacity-0'}`} href={'/projects'}>projects</Link>
        </div>
      </div>
      <div
        onClick={() => setShowMenu(false)}
        className={`fixed inset-0 bg-black z-[18] duration-300 max-h-[100dvh] h-screen transition-[opacity] ${showMenu ? 'pointer-events-auto opacity-60' : 'pointer-events-none opacity-0'}`}>
      </div >
    </>
  )
}

'use client'

export const SignupForm = () => {
  return (
    <form
    className='flex flex-col gap-5'
      onSubmit={(e) => {
        const formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('email')
      }}
    >
      <p className='font-bold text-center text-[1.875rem] leading-[1.875rem] md:text-[2rem] md:leading-[2rem]'>Sign up for the newsletter</p>
      <p className='text-base font-SF-pro-text text-center md:text-xl'>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
      <div className='flex font-SF-pro-text mt-4 items-center'>
        <input placeholder='Enter your email...' required className='pl-4 outline-none w-full h-[3.375rem] border border-black' name='email' type='email' />
        <button type='submit' className='uppercase text-nowrap max-h-[54px] p-4 md:px-[1.5rem] flex items-center bg-black text-white'>sign up</button>
      </div>
    </form>
  )
}

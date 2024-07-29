export const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2 className='block mx-auto max-w-[37rem] px-5 font-subtitle font-thin text-xl'>
      {text}
    </h2>
  )
}

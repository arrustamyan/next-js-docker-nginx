export const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h1 className=' px-5 text-4xl md:text-[3.375rem] text-center md:leading-[3.375rem] font-bold'>
      {text}
    </h1>
  )
}

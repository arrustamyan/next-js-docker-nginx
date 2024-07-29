export const Ticker = ({ content }: any) => {
  return (
    <div className='overflow-hidden font-display font-normal flex items-center gap-4 text-white text-nowrap uppercase'>
      <div className='flex items-center gap-4 animate-ticker'>
        {
          content.map((e: any, index: number) => {
            return (
              <span className={`${index % 2 && 'font-extrabold'}`} key={e}>{e}</span>
            )
          })
        }
      </div>
      <div className='flex items-center gap-4 animate-ticker'>
        {
          content.map((e: any, index: number) => {
            return (
              <span className={`${index % 2 && 'font-extrabold'}`} key={e}>{e}</span>
            )
          })
        }
      </div>
      <div className='flex items-center gap-4 animate-ticker'>
        {
          content.map((e: any, index: number) => {
            return (
              <span className={`${index % 2 && 'font-extrabold'}`} key={e}>{e}</span>
            )
          })
        }
      </div>
    </div>
  )
}

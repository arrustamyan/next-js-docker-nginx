import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/components/title/Title'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { TwitterIcon } from '@/components/icons/TwitterIcon'
import { WhatsappIcon } from '@/components/icons/WhatsappIcon'
import { SignupForm } from '@/components/signupForm/SignupForm'
import { Subtitle } from '@/components/subtitle/Subtitle'

export async function generateStaticParams() {
  const response = await fetch('https://api.storyblok.com/v2/cdn/stories?version=published&content_type=article&token=0PDHfg7Wyff99Ev9vlw2QQtt')
  const articles = await response.json()

  return articles.stories.map((story: any) => ({
    slug: story.slug,
  }))
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const [articleResponse, suggestedResponse] = await Promise.all([
    fetch(`https://api.storyblok.com/v2/cdn/stories/${slug}?resolve_relations=author&token=0PDHfg7Wyff99Ev9vlw2QQtt`),
    fetch(`https://api.storyblok.com/v2/cdn/stories?version=published&content_type=article&excluding_slugs=${slug}&token=0PDHfg7Wyff99Ev9vlw2QQtt`),
  ])
  const article = await articleResponse.json()
  const suggestedArticles = await suggestedResponse.json()

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div>
        <div className='text-center py-14 flex flex-col gap-8 md:gap-12'>
          <div className='mx-auto max-w-[54rem]'>
            <Title text={article.story.content.title} />
          </div>
          <Subtitle text={article.story.content.subtitle} />
          <div>
            <Image className='w-full' width={1440} height={900} alt='alt' src={article.story.content.image.filename} />
          </div>
        </div>
      </div>
      <div className='pt-6 pb-[5.125rem] md:pb-[8.25rem]'>
        <div className='border-black px-5 md:px-0 border-t-2 max-w-[40rem] w-full mx-auto pt-6 pb-10 md:pb-12'>
          <div className='flex font-SF-pro-text items-center gap-4 flex-wrap pb-8 md:pb-14'>
            <div className='w-14 h-14 rounded-full overflow-hidden'>
              <Image className='w-full h-full' alt={article.rels[0].content.name} width={56} height={56} src={article.rels[0].content.image.filename} />
            </div>
            <div className='flex flex-col text-xs md:text-base'>
              <p className='uppercase'>{article.rels[0].content.name}</p>
              <p>Apr 15, 2020 · {article.story.content.read_time} min read</p>
            </div>
            <div className='flex items-center w-full mt-2 md:mt-0 md:w-auto md:ml-auto border border-[#eaeaea] rounded shadow-[0px_1px_4px_0px_#00000014]'>
              <Link href={'/'} className='w-1/3 py-4 md:px-6 border-r  border-r-[#eaeaea] flex items-center justify-center'><FacebookIcon /></Link>
              <Link href={'/'} className='w-1/3 py-4 md:px-6 border-r border-r-[#eaeaea] flex items-center justify-center'><TwitterIcon /></Link>
              <Link href={'/'} className='w-1/3 py-4 md:px-6 flex items-center justify-center'><WhatsappIcon /></Link>
            </div>
          </div>
          {article.story.content.body.content.map((section: any, index: number) => {
            switch (section.type) {
              case 'paragraph':
                // Separate into component @components/cms/Paragraph
                return (
                  section.content?.map((content: any) => {
                    switch (content.type) {
                      case 'text':
                        return <p key={index} className='mb-8'>{content.text}</p>
                      case 'image':
                        return (
                          <div className='md:-mx-12 max-w-[53rem] mx-auto text-xs md:text-base'>
                            <Image className='w-full' width={1440} height={900} alt={content.attrs.alt} src={content.attrs.src} />
                            {content.attrs.title && <p className='max-w-[30rem] px-5 md:px-0 mt-3 mx-auto text-center'>{content.attrs.title}</p>}
                          </div>
                        )
                    }
                    return content.text
                  })
                )
              case 'heading':
                // Separate into component @components/cms/Header
                return (
                  <h2 key={index} className='mt-14 mb-8 font-bold font-display text-2xl md:text-3xl'>
                    {section.content.filter((content: any) => content.type === 'text').map((content: any) => content.text)}
                  </h2>
                )
              case 'bullet_list':
                // Separate into component @components/cms/BulletList
                return (
                  <ul key={index} className='list-disc pl-5'>
                    {section.content.filter((content: any) => content.type === 'list_item').map((content: any, index: number) => <li key={index} className='py-2'>{content.content[0].content.map((content: any) => content.text)}</li>)}
                  </ul>
                )
            }

            return null
          })}
        </div>
        <div className='max-w-[40rem] px-5 md:px-0 mx-auto default border-b border-dotted border-b-black pt-10'>
          {/** Move this into a component @components/Share */}
          <p className='md:hidden'>Share:</p>
          <div className='flex items-center font-display text-base w-full mt-2 md:mt-0 md:w-auto md:h-20 border border-[#eaeaea] rounded shadow-[0px_1px_4px_0px_#00000014]'>
            <Link href={'/'} className='w-1/3 py-4 md:px-6 border-r h-full border-r-[#eaeaea] flex items-center gap-4  justify-center'>
              <div>
                <FacebookIcon />
              </div>
              <span className='hidden md:block'>Share on Facebook</span>
            </Link>
            <Link href={'/'} className='w-1/3 py-4 md:px-6 border-r h-full border-r-[#eaeaea] flex items-center justify-center gap-4 '>
              <div>
                <TwitterIcon />
              </div>
              <span className='hidden md:block'> Share on Twitter</span>
            </Link>
            <Link href={'/'} className='w-1/3 py-4 md:px-6 flex h-full items-center gap-4 justify-center'>
              <div>
                <WhatsappIcon />
              </div>
              <span className='hidden md:block'>Share on Whatsapp</span>
            </Link>
          </div>
          <div className='flex font-display items-center gap-2 my-6 md:my-8 text-xs md:text-base'>
            <span>Tags:</span>
            <div className='flex items-center gap-2'>
              <Link className=' underline' href={'/'}>product design</Link>
              <Link className='underline' href={'/'}>culture</Link>
            </div>
          </div>
        </div>
        <div className='flex px-5 font-display md:px-0 items-center gap-4 max-w-[40rem] mx-auto pt-6 md:pt-8'>
          <div className='w-14 h-14 rounded-full shrink-0 overflow-hidden'>
            <Image className='w-full h-full' alt={article.rels[0].content.name} width={56} height={56} src={article.rels[0].content.image.filename} />
          </div>
          <div className='text-xs md:text-base'>
            <span><b>{article.rels[0].content.name}</b>&nbsp;{article.rels[0].content.bio}</span>
          </div>
        </div>
      </div>
      <div className='after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:bg-black  after:shadow-[0_0_0_100vmax_#000000] after:[clip-path:inset(0-100vmax)] relative pt-[3.875rem] pb-[5.125rem] md:pb-[6.4rem]'>
        <h3 className='mx-auto text-center font-bold text-[2rem] leading-[2rem] md:text-[2.75] md:leading-[2.75]'>What to read next</h3>
        <div className='px-5 font-display mx-auto max-w-[60rem] mb-20 md:mb-28'>
          <div className='absolute z-10 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[65px] h-[52px] md:w-auto md:h-auto'>
            <Image width={82} height={64} alt='eyes' src={'/eyes.png'} />
          </div>
          <div className='flex pt-8 md:pt-10 flex-col md:flex-row md:flex-wrap items-center md:items-start gap-[2.5rem] md:gap-[1.75rem]'>
            {suggestedArticles.stories.map((story: any): any => {
              return (
                <Link key={story.slug} href={'/article/' + story.slug} className='flex flex-col w-full max-w-[21rem] md:max-w-none md:w-[calc(50%-14px)] lg:w-[calc((100%-56px)/3)]'>
                  <div>
                    <Image className='w-full' width={304} height={176} alt={story.content.title} src={story.content.image.filename} />
                  </div>
                  <span className='mt-3 text-center'>{story.content.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
        <div className='mx-auto md:w-[40rem] border border-black border-t-[10px] p-[2.25rem] md:p-[3.75rem]'>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

import { Subtitle } from '@/components/subtitle/Subtitle'
import { Title } from '@/components/title/Title'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const response = await fetch('https://api.storyblok.com/v2/cdn/stories?version=published&content_type=article&token=0PDHfg7Wyff99Ev9vlw2QQtt')
  const articles = await response.json()

  const featuredArticle = articles.stories.find((article: any) => article.tag_list.includes('featured'))

  return (
    <main>
      <div className='max-w-[53rem] mx-auto'>
        <Link href={'/article/' + featuredArticle.slug} className='flex flex-col gap-8 md:gap-12 py-14 text-center'>
          <Image width={1440} height={900} alt='alt' src={featuredArticle.content.image.filename} />
          <Title text={featuredArticle.content.title} />
          <Subtitle text={featuredArticle.content.subtitle} />
        </Link>
        <div className='max-w-[40rem] mx-auto border-t border-black pt-[3.5rem] pb-[5.125rem] md:pt-[4rem] md:pb-[8.75rem]'>
          <h2 className='font-bold text-[2rem] md:text-[2.75rem] md:leading-[2.75rem] text-center'>All articles</h2>
          <div className='flex px-5 pt-8 font-SF-pro-display font-medium md:pt-10 flex-col md:flex-row md:flex-wrap items-center md:items-start gap-[2.5rem] md:gap-0 md:gap-x-[1.75rem] md:gap-y-16'>
            {articles.stories
              .filter((article: any) => !article.tag_list.includes('featured'))
              .map((article: any): any => {
                return (
                  <Link key={article.slug} href={'/article/' + article.slug} className='flex w-full flex-col max-w-[21rem] md:max-w-none md:w-[calc(50%-14px)]'>
                    <div>
                      <Image className='w-full' width={304} height={176} alt={article.content.title} src={article.content.image.filename} />
                    </div>
                    <span className='mt-5 text-center font-display'>{article.content.title}</span>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </main>
  )
}

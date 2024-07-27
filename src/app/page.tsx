import { NewsCard } from '@/components/NewsCard'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main>
      <section className='max-w-screen-xl mx-auto'>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-4">
            <div className="h-[450px] relative">
              <Image
                src={"/image-web-3-desktop.jpg"}
                width={1440}
                height={1080}
                alt="the bright future of web 3.0?"
                className="size-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 py-3 px-2">
              <h2 className="text-3xl md:text-6xl font-extrabold">The Bright Future of Web 3.0?</h2>

              <div className="flex flex-col justify-between items-start text-start">
                <p className="text-base md:text-lg text-muted-foreground">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <Button size="lg">Read More</Button>
              </div>
            </div>
          </div>

          <div className="col-span-2">

            <NewsCard />
          </div>
        </div>
      </section>
    </main>
  )
}

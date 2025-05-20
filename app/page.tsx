import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center bg-blush text-charcoal">
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto text-charcoal">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            We Rebind Books by Hand
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8 font-light">
            Modern leather rebinding and restoration<br className= "hidden md;inline" /> for books that changed you.
          </p>

          <p className="font-sans text-base md:text-lg mb-8">
          Choose your path: curated emotional arcs,<br className="hidden md:inline" /> custom rebinding or a restoration for a book you can't let go of.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/arcs"
              className="inline-block px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              Explore the Arcs
            </Link>
            <Link
              href="/start-your-rebind"
              className="inline-block px-8 py-3 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              Custom Request
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Vision Section */}
      <section className="bg-white text black py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-10">
            Our Vision</h2>
          <p className="text-center text-neutral-700 max-w-x1 mx-auto font-light tracking-wide leading-relaxed"> 
            At Noir Rebind, we rebind books by hand- <br />
            whether it's one that changed your life or <br />
            one you want to give as a meaningful gift. 
          </p>
          <p className="text-center text-neutral-700 max-w-x1 mx-auto font-light tracking-wide leading-relaxed">
            You can choose from our emotional arc collections<br />
            or send in a personal favorite for a custom rebind </p>
          <p className="text-center text-neutral-700 max-w-x1 mx-auto font-light tracking-wide leading-relaxed mb-4">
            However it starts, every book here is given a second life with- </p>
          <p className="font-bold text-lg md:text-xl leading-relaxed italic text-neutral-700">Care.  Meaning.  & Intention. </p>
          
        
        </div>
      </section>

      {/* Emotional Arc Intro Section */}
      <section className="py-20 px-4 bg-[#F3F1EE] text-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">The Four Arcs of Transformation</h2>
          <p className="font-sans font-light text-lg md:text-xl leading-relaxed mb-6">
            We created four emotional arcs to help match books
            to your season of life-
            <br />
            Whether you're starting over, building habits, reconnecting, or creating a legacy.
             <p className="font-sans text-lg md:text-xl leading-relaxed mb-6"></p>
            Follow the arc that resonates, or just explore freely.
          </p>
          <div className="mt-10">
            <Link
              href="/arcs"
              className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Explore The Arcs
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="bg-white text black py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-center">Before & After</h2>
          <p className="font-sans text-lg md:text-xl text-center mb-16">
            See how we transform the books that matter most.
          </p>

          {/* Image Pairs - Stacked Layout */}
          <div className="space-y-8">
            {/* First Row - The Daily Stoic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start justify-center text center">
              <div className="space-y-2">
                <p className="font-medium text-center">Before</p>
                <div className="flex items-center justify-center h-[400px] bg-gray-50">
                  <div className="relative w-[280px] h-[360px]  ">
                    <Image
                      src="/images/daily-stoic-before.png"
                      alt="Before: The Daily Stoic original paperback"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-center">After</p>
                <div className="flex items-center justify-center h-[400px] bg-gray-50">
                  <div className="relative w-[280px] h-[360px] overflow-hidden">
                    <Image
                      src="/images/daily-stoic-after.png"
                      alt="After: The Daily Stoic leather-bound with gold symbols"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - The 4-Hour Workweek */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-medium text-center">Before</p>
                <div className="relative h-[400px] flex items-center justify-center bg-gray-50">
                  <div className="relative w-[280px] h-[390px] ">
                    <Image
                      src="/images/4hour-before.png"
                      alt="Before: The 4-Hour Workweek original paperback"
                      fill
                      className="object-contain object-center  translate-y-[5px]"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-center">After</p>
                <div className="flex items-center justify-center h-[400px] bg-gray-50">
                  <div className="relative w-[280px] h-[350px] overflow-hidden">
                    <Image
                      src="/images/4hour-after.png"
                      alt="After: The 4-Hour Workweek leather-bound with gold Lamborghini design"
                      fill
                      className="object-contain object-center  translate-y-[2px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/start-your-rebind"
              className="inline-flex items-center px-8 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Have a book of your own? Start Your Custom Rebind →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

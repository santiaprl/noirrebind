import Link from "next/link"

export default function ProcessPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">The Craft in Motion</h1>

        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-lg md:text-xl text-center mb-16">
            Every motion has meaning. Watch the handmade process unfold.
          </p>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Video 1 */}
            <div className="relative aspect-[9/16] bg-black">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/videos/bookmaking1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video 2 */}
            <div className="relative aspect-[9/16] bg-black">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/videos/bookmaking2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video 3 */}
            <div className="relative aspect-[9/16] bg-black">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/videos/bookmaking3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-base mb-4">This is Noir Rebind where books are reborn not forgotten.</p>
            <p className="text-sm text-center text-neutral-600 mt-6">
  → For more behind-the-scenes, follow us on{" "}
  <a
    href="https://www.instagram.com/noir.rebind"
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
  >
    Instagram
  </a>{" "}
  or{" "}
  <a
    href="https://www.tiktok.com/@noir.rebind"
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
  >
    TikTok
  </a>
  .
</p>

          </div>

          <div className="mt-8 flex flex-col items-center space-y-4">
            <Link
              href="/arcs"
              className="inline-block px-6 py-3 border border-black text-sm font-medium text-black hover:bg-neutral-100"
            >
              Explore the Arcs
            </Link>
            <Link
              href="/start-your-rebind"
              className="inline-block px-6 py-3 bg-black text-white text-sm font-medium"
              style={{ backgroundColor: "#4B3621" }}
            >
              Request a Custom Rebind
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

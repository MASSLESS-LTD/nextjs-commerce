/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lby5o5J6p10
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from 'components/ui/input';
import Link from 'next/link';

export function HomeComponent() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="flex h-14 items-center bg-[#1b1b1b] px-4 text-white lg:px-6">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <TurtleIcon className="h-6 w-6" />
          <span className="sr-only">Ninja Shanti</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full bg-[#1b1b1b] py-12 text-white md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unleash Your Inner Ninja with Shanti
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Ninja Shanti blends the stealth and resilience of a ninja with the tranquility
                    and harmony of shanti. Discover our collection of hats, lighters, and t-shirts
                    that embody the perfect balance of modern style and traditional elements.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#555] bg-[#1b1b1b] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#555] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-[#f5f5f5] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#1b1b1b] px-3 py-1 text-sm text-white">
                  Featured Products
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Our Unique Clothing Line
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ninja Shanti offers a carefully curated selection of hats, lighters, and t-shirts
                  that blend modern style with traditional ninja and shanti elements. Explore our
                  collection and find the perfect piece to express your unique personality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-[#00b894] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00b894]/50 data-[state=open]:bg-[#00b894]/50">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Product"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center sm:w-full"
                />
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Ninja Shanti Hat
                </div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Blend stealth and tranquility with our signature ninja-inspired hat.
                </div>
              </div>
              <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-[#00b894] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00b894]/50 data-[state=open]:bg-[#00b894]/50">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Product"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center sm:w-full"
                />
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Ninja Shanti Lighter
                </div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Ignite your inner flame with our sleek and durable ninja-inspired lighter.
                </div>
              </div>
              <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-[#00b894] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00b894]/50 data-[state=open]:bg-[#00b894]/50">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Product"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center sm:w-full"
                />
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Ninja Shanti T-Shirt
                </div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Embrace the balance of ninja stealth and shanti tranquility with our signature
                  t-shirt.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#1b1b1b] py-12 text-white md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#00b894] px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Discover the Unique Features of Ninja Shanti
                </h2>
                <div className="grid gap-6">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Resilient and Durable</h3>
                    <p className="text-muted-foreground">
                      Our clothing is designed to withstand the rigors of your active lifestyle,
                      ensuring long-lasting wear and tear resistance.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Breathable and Comfortable</h3>
                    <p className="text-muted-foreground">
                      Crafted with high-quality, breathable fabrics, our clothing keeps you cool and
                      comfortable, whether you're training or relaxing.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Minimalist and Stylish</h3>
                    <p className="text-muted-foreground">
                      Our designs blend modern minimalism with traditional ninja and shanti
                      elements, creating a unique and visually appealing aesthetic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-[#00b894] px-3 py-1 text-sm">Search</div>
                <div className="relative w-full">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search our collection..."
                    className="w-full appearance-none rounded-lg bg-[#1b1b1b] py-2 pl-8 pr-4 text-white shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t bg-[#1b1b1b] px-4 py-6 text-white sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Ninja Shanti. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link href="#" className="text-xs underline-offset-4 hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs underline-offset-4 hover:underline" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TurtleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
      <path d="M4.82 7.9 8 10" />
      <path d="M15.18 7.9 12 10" />
      <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
    </svg>
  );
}

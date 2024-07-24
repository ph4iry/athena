import Background from "../components/Background";
import Card from "../components/Card";
import Spotlight from "../components/Spotlight";

export default function App() {

  return (
  <Background>
    <a href="https://hackclub.com" className="relative top-0 left-[5vw]">
      <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="" className="h-[15vh] -translate-y-3 w-auto hover:rotate-[5deg] transition" />
    </a>
    <div className="text-center px-6 lg:px-32">
      <div className="title">
        <div className="text-5xl md::text-7xl font-bold">Athena</div>
        <div className="text-2xl md:text-4xl mt-2">A Hack Club Initiative</div>
      </div>
      <div id="summary">
        <Card cardType="bordered" className="mt-4"> 
          <div id="jumbo" className="text-xl leading-tight mb-2 md:text-2xl font-bold text-left">
            <span className="text-red">Athena</span> is a group of initiatives at Hack Club that support girls and non-binary teenagers learning to code.
          </div>
          <div id="regular" className="text-base md:text-lg text-left leading-tight">
            From hosting in-person hackathons to virtual workshops, Hack Club is a place to become more technical and immerse yourself in coding.
          </div>
        </Card>
      </div>
      <div id="bento" className="w-full grid lg:grid-rows-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 mb-8">
        <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/1events-card-min.jpg" tintColor="#69346D" href="/events" title="Events" description="One-day coding events that help girls and gender minorities write their first lines of code" className="md:col-span-1 lg:col-span-2 self-stretch" />
        <div className="card md:col-span-2 lg:col-span-3 hover:scale-105 transition cursor-pointer">
          <Spotlight />
        </div>
        <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/3newsletter-card-min.jpg" tintColor="#2E0E0C" href="/community" title="Community" description="Meet like-minded superleaders around the world" className="md:col-span-2 lg:col-span-3 self-stretch" />
        {/* <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/2horizon-coding-min.png" tintColor="#223B26" href="/code" title="Keep Coding" description="Teenager? Click here." className="md:col-span-1 lg:col-span-2 self-stretch" /> */}
        <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/2horizon-coding-min.png" tintColor="#223B26" href="https://daysofservice.hackclub.com" title="Days of Service" description="Looking for the old site? Click here." className="md:col-span-1 lg:col-span-2 self-stretch" />
      </div>
    </div>
  </Background>
  )
}
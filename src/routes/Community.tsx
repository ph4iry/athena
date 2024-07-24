import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Background from "../components/Background";
import Card from "../components/Card";
import events from "../events";

export default function Community() {
  return (
    <Background>
      <div className="px-6 lg:px-32 py-16">
        <a href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</a>
        <div className="text-5xl font-bold">Community</div>
        <div className="mt-6">
          <Card cardType="bordered" className="mb-6">
            <span className="block text-2xl font-bold">Your journey at Hack Club starts with the community.</span>
            <span className="block">Here's two steps you can take to get started:</span>
          </Card>
            <div className="flex flex-col md:flex-row gap-4 mt-2 w-full">
              <Card cardType="tinted" tintColor="black" href="https://hackclub.com/slack" image="https://cloud-j0p07nviw-hack-club-bot.vercel.app/0image.png" title="Join the Slack!" description="" className="md:w-1/2" />
              <Card cardType="bordered" className="md:w-1/2">
                Follow Hack Club on social media!
                <div className="flex w-fit flex-col gap-1">
                  <a href="http://instagram.com/starthackclub" className="flex text-orange gap-2 flex-nowrap items-center" target="_blank" rel="noopener noreferrer">
                    <img src="https://icons.hackclub.com/api/icons/orange/instagram" className="size-8" alt="Instagram" />
                    <span className="block">@starthackclub</span>
                  </a>
                  <a href="http://github.com/hackclub" className="flex text-slate-700 gap-2 flex-nowrap items-center" target="_blank" rel="noopener noreferrer">
                    <img src="https://icons.hackclub.com/api/icons/0x334155/github" className="size-8" alt="Instagram" />
                    <span className="block">@hackclub</span>
                  </a>
                  <a href="https://x.com/hackclub" className="flex text-[#1DA1F2] gap-2 flex-nowrap items-center" target="_blank" rel="noopener noreferrer">
                    <img src="https://icons.hackclub.com/api/icons/0x1DA1F2/twitter" className="size-8" alt="Instagram" />
                    <span className="block">@hackclub</span>
                  </a>
                  <a href="https://www.youtube.com/c/HackClubHQ" className="flex text-[#FF0000] gap-2 flex-nowrap items-center" target="_blank" rel="noopener noreferrer">
                    <img src="https://icons.hackclub.com/api/icons/0xFF0000/youtube" className="size-8" alt="Instagram" />
                    <span className="block">@HackClubHQ</span>
                  </a>
                </div>
              </Card>
            </div>
        </div>
        <hr className="my-6 border border-black" />
        <div className="flex mt-6 gap-6">
          <div className="w-full min-h-[45vh] border-2 border-black bg-white rounded-lg flex flex-col md:flex-row">
            <div className="min-h-48 md:w-2/5 bg-cover grow-0 rounded-t-lg md:rounded-r-none md:rounded-l-lg" style={{
              backgroundImage: `url(${events[events.length - 1].photos[0]})`
            }}>
            </div>
            <div className="md:w-3/5 grow p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold">Newsletter</h1>
                <p className="text-base">
                  Hey y'all! I'm Malycia (
                    <span className="text-red">@FireBreather65</span>). I'm a 17-year-old Hack Clubber from Washington State, and I'm currently working as a summer intern at Hack Club's Vermont HQ.
                  <br /><br />
                  This is a 5-minute rundown of what some girls and non-binary Hack Clubbers have been up to this past month! You're receiving this newsletter because you're a girl or non-binary student in the Hack Club Slack.
                </p>
              </div>
              <div className="flex justify-end">
                <a href="/newsletters/1.pdf" className="flex items-center gap-2 transition-all hover:gap-4">Read more <FaArrowRightLong/></a>
              </div>
            </div>
          </div>
          <div className="hidden w-1/4">
            <div className="text-2xl font-bold">Past Issues</div>
            <div className="flex flex-col mt-4 gap-2">
              <a href="/past" className="border-2 border-black rounded-lg p-4 bg-white">
                <div className="text-xl font-bold text-red">Title</div>
                <div className="text-base">Description, Date</div>
              </a>
              <a href="/past" className="border-2 border-black rounded-lg p-4 bg-white">
                <div className="text-xl font-bold text-red">Title</div>
                <div className="text-base">Description, Date</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Background>
  )
}
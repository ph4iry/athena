import { Dialog, DialogPanel } from "@headlessui/react";
import Card from "./Card";
import { useState } from "react";

export default function SpotlightCard() {
  const [open, setOpen] = useState(false);
  fetch('/airtable/spotlight');

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <div className="block lg:hidden col-span-3">
          <Card cardType="photo" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/010doc-spotlight-min.jpg" photoLocation="top">
            <div className="text-2xl text-red font-bold">Spotlight</div>
            <div className="text-sm md:text-base">from #days-of-service</div>
            <div className="mt-6">
            At HQ last week we finished 10 Days of Code 🎉!<br/>
            Make sure to check out the repo @sophia posted, and some of the projects on Instagram- and consider joining next summer? We will definitely repeat it.
            </div>
          </Card>
        </div>
        <div className="hidden lg:block col-span-3">
          <Card cardType="photo" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/010doc-spotlight-min.jpg" photoLocation="right">
            <div className="text-2xl text-red font-bold">Spotlight</div>
            <div className="text-sm md:text-base">from #days-of-service</div>
            <div className="mt-6">
            At HQ last week we finished 10 Days of Code 🎉!<br/>
            Make sure to check out the repo @sophia posted, and some of the projects on Instagram- and consider joining next summer? We will definitely repeat it.
            </div>
          </Card>
        </div>
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="transition delay-0 duration-300 ease-out data-[closed]:opacity-0" transition>
        <div className="fixed inset-0 bg-black/25 background-blur-sm flex w-screen items-center justify-center p-6 md:p-16 z-50">
          <DialogPanel className="bg-white flex flex-col-reverse md:flex-row rounded-lg min-w-[50vw] justify-end md:items-stretch h-[70vh] overflow-hidden">
            <div className="md:w-1/2 p-4 lg:p-10">
              <div className="text-3xl font-bold text-red">Spotlight</div>
              {/* change this to the actual channel name we decide */}
              <div className="text-base">from #days-of-service</div>
              <div className="mt-4">
                At HQ last week we finished 10 Days of Code 🎉!
                <br/><br/>
                Make sure to check out <a href="https://github.com/hackclub/10-days-of-code" className="underline">the repo @sophia posted</a>, and <a href="https://instagram.com/starthackclub" className="underline"> some of the projects on Instagram</a>- and consider joining next summer? We will definitely repeat it.
              </div>
              <div className="mt-4">
                <a href="https://ten-days-of-code.hackclub.com" className="underline">View the 10 Days of Code website</a>
              </div>
            </div>
            <div className="bg-red-300 min-h-[20vh] md:w-1/2 bg-cover relative" style={{
              backgroundImage: 'url(https://cloud-lz7wipd7a-hack-club-bot.vercel.app/010doc-spotlight-min.jpg)'
            }}>
              <button className="absolute right-6 top-6 text-white text-7xl transition hover:scale-110 block" onClick={() => setOpen(false)}><img src="https://icons.hackclub.com/api/icons/white/glyph:view-close.svg" className="size-14 cursor-pointer" alt="close" /></button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
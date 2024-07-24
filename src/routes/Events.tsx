import { useState } from "react";
import Background from "../components/Background";
import Card from "../components/Card";
import PastEvent from "../components/PastEvent";
import UpcomingEvent from "../components/UpcomingEvent";
import events from "../events";
import { Fragment } from "react/jsx-runtime";
// import useImagePreloader from "../hooks/useImagePreloader";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Events() {
  const [showAllEvents, setShowAllEvents] = useState(false);
  // const files: string[] = [];
  // events.forEach(event => files.push(event.logo, ...event.photos));

  // useImagePreloader(files);
  
  return (
    <Background>
      <div className="px-6 lg:px-32 py-16">
        <a href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</a>
        <div className="text-5xl font-bold">Events</div>
        <div className="mt-4">
          <Card cardType="bordered" className="!border-red">
            <span className="block text-2xl font-bold">Events bring people together.</span>
            Hack Clubbers run one-day hackathons for their cities to help girls and non binary students write their first lines of code, some in collaboration with community organizations in their communities. Learn more about our events below!
          </Card>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="w-full items-start">
            <div className="text-3xl font-bold">Upcoming Events</div>
            <div className="text-base">Run your own Athena event by joining our community in the <a href="https://hackclub.com/slack" className="underline">Hack Club Slack!</a></div>
          </div>
          <hr className="border border-black w-full translate-y-1.5" />

          <div className="w-full flex gap-6 pb-4 overflow-x-scroll lg:overflow-x-visible">
            <UpcomingEvent name="SF" location="San Francisco, CA" time="Aug 2024" website="sf.hackclub.com" />
            <UpcomingEvent name="Luna" location="New York City, NY" time="Nov 2024" website="sf.hackclub.com" />
            <UpcomingEvent name="Toronto" location="Toronto, ON" time="May 2025" website="sf.hackclub.com" />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-bold">Recent Events</div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <PastEvent
              accentColor={events[events.length - 1].accentColor || 'black'}
              bgColor={events[events.length - 1].bgColor || 'white'}
              tintColor={events[events.length - 1].tintColor || 'black'}
              className="col-span-2 row-span-2"
              name={events[events.length - 1].name}
              location={events[events.length - 1].location}
              date={events[events.length - 1].date}
              logo={events[events.length - 1].logo}
              cardLogo={events[events.length - 1].cardLogo}
              github_link={events[events.length - 1].github_link}
              description={events[events.length - 1].description}
              photos={events[events.length - 1].photos}
              photocreds={events[events.length - 1].photocreds}
              mostRecent
            />
            
            {events.slice().reverse().slice(1, 3).map((event, i) => {
              return (
                <Fragment key={i}>
                  <PastEvent
                    accentColor={event.accentColor || 'black'}
                    bgColor={event.bgColor || 'white'}
                    tintColor={event.tintColor || 'black'}
                    className="row-span-2 md:row-span-1 col-span-2"
                    name={event.name}
                    location={event.location}
                    date={event.date}
                    logo={event.logo}
                    cardLogo={event.cardLogo}
                    github_link={event.github_link}
                    description={event.description}
                    photos={event.photos}
                    photocreds={event.photocreds}
                  />
                </Fragment>
              )
            })}
            <div className={showAllEvents ? "grid gap-6 col-span-2 md:col-span-4 grid-cols-subgrid auto-rows-auto" : "hidden"}>
              {events.slice().reverse().slice(3).map((event, i) => {
                const span = (() => {
                  if ((i - 1) % 3 === 0 && i < events.length - 5) {
                    return "col-span-2 row-span-2";
                  } else {
                    return "col-span-2";
                  }
                })();
                
                return (
                  <Fragment key={i}>
                    <PastEvent
                      accentColor={event.accentColor || 'black'}
                      bgColor={event.bgColor || 'white'}
                      tintColor={event.tintColor || 'black'}
                      className={span}
                      name={event.name}
                      location={event.location}
                      date={event.date}
                      logo={event.logo}
                      cardLogo={event.cardLogo}
                      github_link={event.github_link}
                      description={event.description}
                      photos={event.photos}
                      photocreds={event.photocreds}
                    />
                  </Fragment>
                )
              })}
            </div>
          </div>
          <button className="w-full bg-white border-black border-2 rounded-lg p-4 mt-6 text-center text-xl shadow-md" onClick={() => setShowAllEvents(!showAllEvents)}>See {showAllEvents ? 'less' : 'more'}</button>
        </div>
      </div>
    </Background>
  )
}
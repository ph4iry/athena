import Card from "./components/Card";

export default function App() {
  return (
  <>
    <a href="https://hackclub.com">
      <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="" className="ml-[5vw] h-[15vh] -translate-y-3 w-auto hover:rotate-[5deg] transition" />
    </a>
    <div className="px-10 space-y-5">
      hello
      <Card cardType="tinted" tintColor="red" title="Events" description="im so cool and special" image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" href="/" />
      <Card cardType="bordered">
        <h1 className="text-3xl font-bold text-red">hi! im a bordered card</h1>
        <p className="text-base text-black">this is more lore about me</p>
      </Card>
      <div className="grid grid-cols-2 gap-5">
        <Card cardType="photo" image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" photoLocation="left" className="border-2 border-black">
          <h1 className="text-3xl font-bold text-red">hi! im a photo card</h1>
          <p className="text-base text-black">this is more lore about me</p>
        </Card>
        <Card cardType="photo" image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" photoLocation="right">
          <h1 className="text-3xl font-bold text-red">hi! im a photo card</h1>
          <p className="text-base text-black">this is more lore about me</p>
        </Card>
      </div>
      <div className="grid grid-cols-3">
        <Card cardType="photo" image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" photoLocation="top">
          <h1 className="text-3xl font-bold text-red">hi! im a photo card</h1>
          <p className="text-base text-black">this is more lore about me</p>
        </Card>
      </div>
      
    </div>
</>
  )
}
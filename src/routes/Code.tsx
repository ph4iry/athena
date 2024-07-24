import { FaArrowLeftLong } from "react-icons/fa6";
import Background from "../components/Background";

export default function Code() {
  return (
    <Background>
      <div className="px-6 lg:px-32 py-16">
        <a href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</a>
        <div className="text-5xl font-bold">Keep Coding</div>
        <div className="md:w-full flex-col md:flex-row flex gap-4">
          <div className="">
            {/* under construction */}
          </div>
        </div>
      </div>
    </Background>
  )
}
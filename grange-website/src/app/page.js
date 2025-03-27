import Image from "next/image";

export default function Home() {
  return (

  <button className="inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-green-700/70 bg-green-300/30 hover:bg-green-500/70 hover:text-white">
  <span before="Send message" className="relative py-1.5 transition-transform inline-block before:content-[attr(before)] before:py-1.5 before:absolute before:top-full group-hover:-translate-y-full">Send message</span>
</button>

);
}

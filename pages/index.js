import Image from "next/image"
import cat1 from "../public/images/Capture.PNG"
import cat2 from "../public/images/Capture2.PNG"
import cat3 from "../public/images/Capture4.PNG"
import cat4 from "../public/images/Capture5.PNG"
import cat5 from "../public/images/nicki.PNG"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-x-8 lg-flex-row'>
    <h1 className='text-3xl'>Meet The Teams</h1>
    <div className='flex flex-row items-center justify-center w-full h-screen space-y-10 lg-flex-row'>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
      <Image
        objectFit='cover'
        src={cat1}
        alt='Picture of Cat1'
        layout='fill'
        priority
      />
    </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
      <Image
        objectFit='cover'
        src={cat2}
        alt='Picture of Cat2'
        layout='fill'
        priority
      />
    </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
      <Image
        objectFit='cover'
        src={cat3}
        alt='Picture of Cat3'
        layout='fill'
        priority
      />
    </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
      <Image
        objectFit='cover'
        src={cat4}
        alt='Picture of Cat3'
        layout='fill'
        priority
      />
    </div>
    <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
      <Image
        objectFit='cover'
        src={cat5}
        alt='Picture of Cat3'
        layout='fill'
        priority
      />
    </div>
    </div>
  </div>
  )
}

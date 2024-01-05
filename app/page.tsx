import Image from 'next/image'
import HouseImage from './component/HouseImage'
import HeaderUI from './component/HeaderUI'

export default function Home() {
  return (
    <div>
      <HeaderUI />
      <HouseImage
        src="/house.jpg"
        width={1280}
        height={720}
        alt="家"
      />
      <HouseImage
        src="/living-room.jpg"
        width={1280}
        height={720}
        alt="家"
      />
    </div>
  )
}

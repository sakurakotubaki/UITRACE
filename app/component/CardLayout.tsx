import HouseImage from "./HouseImage";

export default function CardLayout() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HouseImage
        src="/house.jpg"
        width={1280}
        height={720}
        alt="ソファ"
      />
      <HouseImage
        src="/living-room.jpg"
        width={1280}
        height={720}
        alt="ソファ"
      />
      <HouseImage
        src="/table.jpg"
        width={1280}
        height={720}
        alt="デスク"
      />
      <HouseImage
        src="/chair.jpg"
        width={1280}
        height={720}
        alt="イス"
      />
        </div>
    );
}

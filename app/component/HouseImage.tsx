import Image from "next/image";
// 画像とサイズのprops用の型定義
interface FurnitureCardProps {
    src: string;
    width: number;
    height: number;
    alt: string;
  }
// propsでコンポーネントに値を渡す
export default function FurnitureCard({ src, width, height, alt}: FurnitureCardProps) {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden sm:w-3/4 sm:h-3/4  mt-3.5 mx-14 mb-7">
        <div className="w-full md:w-1/2 mt-7 ms-7 mb-7 sm:mt-4 sm:ms-4">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            layout="responsive"
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 mr-7 mt-7 mb-7 sm:p-2 sm:mr-4 sm:mt-4">
          <h2 className="text-sm">これは品質の良い家具です</h2>
        </div>
      </div>
    );
}

import Image from 'next/image';

export default function HeaderUI() {
  return (
    <header className="flex items-center justify-between p-5 bg-white shadow-md sm:flex-row md:p-8">
      <div className="flex items-center">
        <Image src="/cart.png" alt="Logo" width={50} height={50} />
        <h1 className="ml-3 text-2xl font-semibold text-gray-700 sm:text-3xl">家具のECサイト</h1>
      </div>
    </header>
  );
}

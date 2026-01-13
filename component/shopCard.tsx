import Image from "next/image";

type Props = {
  image: string;
  title: string;
  address: string;
  time: string;
};

export default function ShopCard({ image, title, address, time }: Props) {
  return (
    <div className="w-64 rounded-2xl bg-white shadow-lg overflow-hidden transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <Image
        src={image}
        alt={title}
        width={288}
        height={180}
        className="h-56 w-full object-cover"
      />
      <div className="p-4 text-sm text-[#555] text-left">
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="mb-1">{address}</p>
        <p className="text-xs">所要時間 {time}</p>
      </div>
    </div>
  );
}

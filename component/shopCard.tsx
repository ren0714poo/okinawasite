import Image from "next/image";

type Props = {
  image: string;
  title: string;
  address: string;
  time: string;
};

export default function ShopCard({ image, title, address, time }: Props) {
  return (
    <div className="w-72 rounded-2xl bg-white shadow-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={288}
        height={180}
        className="h-44 w-full object-cover"
      />
      <div className="p-4 text-sm text-[#555]">
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="mb-1">{address}</p>
        <p className="text-xs">所要時間 {time}</p>
      </div>
    </div>
  );
}

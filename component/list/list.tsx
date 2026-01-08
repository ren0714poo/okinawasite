import ShopCard from "@/component/shopCard";

const shops = [
  {
    image: "/assets/shop1.png",
    title: "work studio kirara",
    address: "沖縄県那覇市〇〇",
    time: "30分",
  },
  {
    image: "/assets/shop2.png",
    title: "TRIP CAFE NAHA",
    address: "沖縄県那覇市△△",
    time: "1時間",
  },
  {
    image: "/assets/shop3.png",
    title: "まいまいシーサー",
    address: "沖縄県〇〇",
    time: "2〜3時間",
  },
];
export default function Explanation() {
  return (
    <section className="w-full py-12 flex items-center justify-center text-[#555555]">
      <div className="flex flex-col items-center justify-center gap-4 mt-16 text-center px-6">
        {shops.map((shop, index) => (
          <ShopCard
            key={index}
            image={shop.image}
            title={shop.title}
            address={shop.address}
            time={shop.time}
          />
        ))}
      </div>
    </section>
  );
}
import ShopCard from "@/component/shopCard";

const shops = [
  {
    image: "/assets/shop.png",
    title: "work studio kirara",
    address: "沖縄県国頭郡恩納村恩納2767 万座毛活性化施設",
    time: "30分",
  },
  {
    image: "/assets/shop.png",
    title: "TRIP CAFE NAHA",
    address: "沖縄県那覇市牧志2-6-34 たからビル2F",
    time: "1時間",
  },
  {
    image: "/assets/shop.png",
    title: "まいまいシーサー",
    address: "沖縄県国頭郡本部町字山川969番地 誠もち店美ら海工房2階",
    time: "2〜3時間",
  },
  {
    image: "/assets/shop.png",
    title: "美ら風(ちゅらかじ)",
    address: "沖縄県那覇市牧志3-2-50",
    time: "90分",
  },
  {
    image: "/assets/shop.png",
    title: "てぃあんだー",
    address: "沖縄県那覇市松尾1-9-8 103",
    time: "1時間",
  },
  {
    image: "/assets/shop.png",
    title: "ドぅーシーラボ",
    address: "沖縄県宮古島市平良字久貝681-1",
    time: "50分",
  },
];
export default function List() {
  return (
    <section className="w-full py-12 text-[#555555]">
      <h1 className="text-xl text-center my-12 text-sky-400 md:text-2xl font-bold">
        イベント一覧
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
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
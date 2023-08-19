import Card from "./Card";

export interface Props {}

export function ReviewCoba() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-6xl mx-auto my-10 overflow-hidden grid grid-cols-1 md:grid-cols-3 grid-rows-2">
        <div className="row-span-2 col-span-3 text-center capitalize text-white text-5xl md:text-6xl mb-16">
          <h2>introducing model 001</h2>
        </div>
        <div className="row-span-1 bg-red-400 col-span-full w-full">
          <img src="/photo-9.png" alt="" />
        </div>
      </div>

      <div className="max-w-6xl p-4 md:p-0 w-full mx-auto my-10 overflow-hidden md:grid-flow-col-dense grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
        <div className="aspect-square overflow-hidden rounded-lg">
          <Card src="/Rectangle2.png" PriceTagstyle="priceTagCatalog" />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg">
          <Card src="Rectangle4.png" PriceTagstyle="priceTagCatalog" />
        </div>
        <div className="aspect-square overflow-hidden col-span-2 row-span-full rounded-lg transition5s">
          <Card src="Rectangle3.png" PriceTagstyle="priceTagCatalog" />
        </div>
      </div>
      <div className="max-w-6xl p-4 md:p-0 w-full mx-auto my-10 overflow-hidden md:grid-flow-col-dense grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
        <div className="aspect-square overflow-hidden rounded-lg">
          <Card src="/Rectangle2.png" PriceTagstyle="priceTagCatalog" />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg">
          <Card src="Rectangle4.png" PriceTagstyle="priceTagCatalog" />
        </div>
        <div className="aspect-square overflow-hidden col-span-2 row-span-full rounded-lg transition5s">
          {/* <img src="Rectangle1.png" alt="" /> */}
          <Card src="Rectangle5.png" PriceTagstyle="priceTagCatalog" />
        </div>
      </div>
    </section>
  );
}

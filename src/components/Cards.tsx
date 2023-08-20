import { images } from "../constant";
import Card from "./Card";
export default function Cards() {
  return (
    <section className="flex flex-col justify-between items-center p-4 sm:p-2 md:p-0">
      <div className="flex justify-between items-baseline md:items-center max-w-6xl w-full mb-2">
        <h2 className="text-2xl md:text-3xl">Explore Model 000</h2>
        <a
          href="#"
          className="text-lg md:text-xl hover:underline underline-offset-8">
          See more
        </a>
      </div>

      <div className="max-w-6xl grid gap-4 grid-cols-2 md:grid-cols-3 ">
        {images.map((image, i) => (
          <a href={`/${i}`} key={i}>
            <Card
              key={i}
              myKey={i}
              src={image.source}
              PriceTagstyle="priceTagCards"
            />
          </a>
        ))}
      </div>

      <a
        href="#"
        className="w-36 sm:w-44 my-6 text-center uppercase text-base md:text-xl bg-red-600 text-white py-3 px-2 rounded-full transition5s">
        buy now
      </a>
    </section>
  );
}

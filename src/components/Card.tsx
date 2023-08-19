import PriceTag from "./PriceTag";
interface Props {
  myKey?: number;
  src: string;
  PriceTagstyle?: string;
}
export default function Card({ myKey, src, PriceTagstyle }: Props) {
  return (
    <div key={myKey} className={`overflow-hidden transition5s`}>
      <div className="flex justify-center relative">
        <a href="#">
          <img
            className="object-cover rounded-lg"
            src={src}
            alt="catalog"
            loading="lazy"
          />
        </a>
        <PriceTag style={`${PriceTagstyle}`} />
      </div>
    </div>
  );
}

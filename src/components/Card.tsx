import PriceTag from "./PriceTag";
interface Props {
  myKey?: number;
  src: string;
}
export default function Card({ myKey, src }: Props) {
  return (
    <div
      key={myKey}
      className="overflow-hidden h-fit w-fit bg-white border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
      <div className="flex justify-center relative">
        <a href="#">
          <img className="w-full h-full object-cover" src={src} alt="catalog" />
        </a>
        <PriceTag />
      </div>
    </div>
  );
}

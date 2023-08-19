interface Props {
  style?: string;
}

export default function PriceTag({ style }: Props) {
  return (
    <div className={`${style}`}>
      <h2 className="font-bold">Model 000</h2>
      <div className="flex justify-between">
        <p>Red</p>
        <p>Rp.10.000</p>
      </div>
    </div>
  );
}

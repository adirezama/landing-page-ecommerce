export default function PriceTag() {
  return (
    <div className="absolute bottom-3 sm:bottom-4 flex flex-col justify-center min-w-[8rem] sm:min-w-[12.5rem] md:w-[13.5rem] lg:w-[16.5rem] rounded-lg bg-white opacity-95 py-1 sm:py-3 px-2 sm:px-6 text-sm md:text-xl">
      <h2 className="font-bold">Model 000</h2>
      <div className="flex justify-between">
        <p>Red</p>
        <p>Rp.10.000</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="">
      <img
        className="w-full object-cover md:hidden"
        src="/Rectangle37.png"
        alt=""
      />
      <div className="max-w-6xl md:h-[700px] mx-auto flex flex-col md:flex-row w-full xl:p-0 bg-opacity-95 bg-gray-200 md:bg-shoes md:rounded-2xl md:bg-cover">
        <div
          className={`p-4 max-w-[300px] h-fit flex flex-col items-center justify-center gap-1 mx-auto md:items-start md:self-end md:ml-36 md:mb-14`}>
          <p className="text-xl font-semibold md:text-xl ">Introducing</p>
          <h1 className="text-3xl font-bold md:text-6xl">Bottom x KTNLAJ</h1>
          <p className="text-base font-medium md:text-xl">
            Design by Marc Marques
          </p>
          <a
            href="#"
            className="w-full mt-6 text-center uppercase text-base md:text-xl bg-red-600 text-white py-4 px-4 rounded-full md:rounded-none">
            buy now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  const brands = [{ name: "BRAND" }, { name: "BRAND" }, { name: "BRAND" }];
  return (
    <div className="md:max-w-6xl md:mx-auto md:rounded-2xl p-4 flex flex-col items-center bg-opacity-95 bg-gray-200 mt-4 mb-6">
      <h2 className="text-3xl font-bold px-4 text-center">
        “The most thoughfully designed sneaker ever”
      </h2>
      <div className="flex justify-center my-5 w-full gap-5 md:gap-20 text-base md:text-3xl">
        {brands.map((brand, index) => (
          <p key={index}>{brand.name}</p>
        ))}
      </div>
    </div>
  );
}

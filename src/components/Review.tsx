import Card from "./Card";

export default function Review() {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-6xl grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="col-span-2 bg-gray-400 overflow-hidden rounded-2xl flex flex-col justify-between">
          <h2 className="font-bold lg:text-6xl text-center capitalize p-4">
            the hype is real
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <img
              className="w-full h-full aspect-square md:w-80 md:h-80 px-4 lg:p-0 lg:max-w-sm lg:w-full object-cover rounded-2xl"
              src="/photo-24.png"
              alt=""
            />
            <div className="mx-auto lg:flex flex-col items-center justify-center w-[300px] gap-11">
              <div className="flex items-center justify-between w-22">
                <h2>Zakary C</h2>
                <img className="object-contain" src="/Frame97.png" alt="" />
              </div>
              <h2 className="text-2xl text-center">
                “Stylish simple most comfortable shoes. i’m buying a second
                pair. Wear it daily”
              </h2>
            </div>
          </div>
        </div>
        <Card src={`/Rectangle1.png`} myKey={1} />
      </div>
    </section>
  );
}

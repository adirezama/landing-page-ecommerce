export interface Props {}

export function LearnMore() {
  return (
    <section className=" my-20">
      <div className="max-w-6xl mx-auto grid gap-4 grid-flow-row-dense grid-cols-2 md:grid-cols-3">
        <div className="col-span-2 bg-red-400 overflow-hidden rounded-tl-xl rounded-bl-xl">
          <div className="flex h-[31.25rem]">
            <img className="w-[60%] object-cover" src="/photo-20.png" alt="" />
            <div className="flex flex-col justify-center items-center w-[40%] bg-black text-white">
              <a
                href="#"
                className="bg-white text-black text-center p-2 w-32 rounded-full mb-4">
                Our Story
              </a>
              <h2 className="text-4xl">Bottoms</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:justify-center items-center rounded-tr-xl rounded-br-xl h-60 md:h-[31.25rem] col-span-2 md:col-span-1 bg-gray-200 bg-opacity-50">
          <h2 className="text-3xl text-center mb-4">
            Based in Jakarta city, Bottoms began with an idea: make a Boots
            healtier everyday
          </h2>
          <a
            href="#"
            className="bg-black text-white p-2 w-32 rounded-full text-center">
            Our Story
          </a>
        </div>
        <div className="col-span-2 bg-red-400 overflow-hidden rounded-tl-xl rounded-bl-xl">
          <div className="flex h-[31.25rem]">
            <img className="w-[60%] object-cover" src="/photo-19.png" alt="" />
            <div className="flex flex-col justify-center items-center w-[40%] bg-black text-white">
              <a
                href="#"
                className="bg-white text-black text-center p-2 w-32 rounded-full mb-4">
                Our Story
              </a>
              <h2 className="text-4xl">Bottoms</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:justify-center items-center rounded-tr-xl rounded-br-xl h-60 md:h-[31.25rem] col-span-2 md:col-span-1 bg-gray-200 bg-opacity-50">
          <h2 className="text-3xl text-center mb-4">
            Read our co-founder Aji suatmaji about struggle, chasing dreams, and
            making jobs
          </h2>
          <a
            href="#"
            className="bg-black text-white p-2 w-32 rounded-full text-center">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

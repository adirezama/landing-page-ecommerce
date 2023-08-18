import { ReactComponent as Burger } from "../assets/burger.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Account } from "../assets/account.svg";
import { menus } from "../constant";
export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between p-4 xl:px-0">
        <Burger className="text-xl md:hidden cursor-pointer" />
        <div className="md:w-44">
          <img className="w-10 " src="/icon-rev.png" alt="" />
        </div>
        <ul className=" justify-center text-xl gap-6 hidden md:flex">
          {menus.map((menu, index) => (
            <li className="cursor-pointer" key={index}>
              {menu.title}
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center md:w-44 gap-5">
          <div className="hidden md:flex items-center gap-5 text-xl ">
            <p className=" cursor-pointer">Support</p>
            <Account className=" cursor-pointer" />
          </div>
          <div className="cursor-pointer relative">
            <Cart className="text-xl" />
            <p className="absolute text-center bg-gray-600 bg-opacity-80 w-4 rounded-full text-[10px] text-white top-2.5 left-2.5">
              0
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

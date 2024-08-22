import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap mb-12">
        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />

            <Image
              src="https://images.pexels.com/photos/27425438/pexels-photo-27425438/free-photo-of-a-person-is-using-a-laptop-and-a-notebook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ProductName</span>
            <span className="font-semibold">Ksh 4500</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white">
            Add To Cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />

            <Image
              src="https://images.pexels.com/photos/27425438/pexels-photo-27425438/free-photo-of-a-person-is-using-a-laptop-and-a-notebook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ProductName</span>
            <span className="font-semibold">Ksh 4500</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white">
            Add To Cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />

            <Image
              src="https://images.pexels.com/photos/27425438/pexels-photo-27425438/free-photo-of-a-person-is-using-a-laptop-and-a-notebook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ProductName</span>
            <span className="font-semibold">Ksh 4500</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white">
            Add To Cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />

            <Image
              src="https://images.pexels.com/photos/27425438/pexels-photo-27425438/free-photo-of-a-person-is-using-a-laptop-and-a-notebook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="20vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ProductName</span>
            <span className="font-semibold">Ksh 4500</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white">
            Add To Cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductList;

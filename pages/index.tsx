import type { NextPage } from "next"


const Home: NextPage = () => {
  return (
    <div className="bg-blue-300 py-20 px-20 flex flex-col gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
          <span className="font-semibold text-3xl">Select Item</span>
          <div className="flex justify-between my-2">
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
          <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
            <span>Total</span>
            <span className="font-semibold">$100</span>
          </div>
          <div className="mt-5 bg-blue-500 text-white p-3 rounded-3xl text-center w-2/4 mx-auto">Check Out</div>
      </div>

      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
          <div className="bg-blue-500 p-6 pb-14">
            <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 relative -top-5 bg-white">
            <div className="flex relative -top-16 justify-between items-end">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 bg-red-400 rounded-full" />
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-600">Spent</span>
                <span className="font-medium">$310</span>
              </div>
            </div>
            <div className="relative flex flex-col items-center -mt-16 -mb-5">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-600">New York, USA</span>
            </div>
          </div>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐️4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Moon</span>
          <span className="font-xs text-gray-600" >Chair</span>
         <div className="mt-3 mb-5 flex justify-between items-center">
            <div>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" bg-blue-200 items-center rounded-lg aspect-square w-8 font-medium text-xl text-gray-600">+</button>
              <span>1</span>
              <button className=" bg-blue-200 items-center rounded-lg aspect-square w-8 font-medium text-xl text-gray-600">-</button>
            </div>
         </div>
         <div className="flex justify-between">
           <span className="text-lg font-bold">$550</span>
           <button className="text-white text-sm py-2 px-8 bg-blue-500 rounded-xl">Add to cart</button>
         </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl">

      </div>
    </div>
  )
}

export default Home

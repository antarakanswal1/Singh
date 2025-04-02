import React from 'react'; 

const CartTools = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Cart Items Section */}
      <div className="lg:col-span-2 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm sm:text-base">
          <thead>
            <tr className="bg-[#f8f4f0] text-left">
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 flex-wrap">
              <td className="p-3 flex items-center space-x-3">
                <img src="../assets/asgard sofa.png" alt="Asgaard sofa" className="w-16 h-16 rounded" />
                <span className="text-gray-600 text-xs sm:text-base">Asgaard sofa</span>
              </td>
              <td className="p-3 text-xs sm:text-base">Rs. 250,000.00</td>
              <td className="p-3">
                <input type="number" className="w-12 text-center border border-gray-300 rounded" value="1" />
              </td>
              <td className="p-3 text-xs sm:text-base">Rs. 250,000.00</td>
              <td className="p-3 text-center text-red-500 cursor-pointer">🗑️</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Cart Totals Section */}
      <div className="bg-[#f8f4f0] p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold">Cart Totals</h2>
        <div className="flex justify-between mt-4 text-sm sm:text-base">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total</span>
          <span className="text-gold">Rs. 250,000.00</span>
        </div>
        <button className="mt-6 w-full py-2 border border-black rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartTools;
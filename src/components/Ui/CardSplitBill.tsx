import React from 'react'

const CardSplitBill = () => {
  return (
    <div className="flex flex-wrap justify-center items-start space-x-10">

    {/* :EMAIL INPUT -> BOTTOM BORDER AND NO VISIBLE LABEL */}
    <div>
      {/* ::Label */}
      <label htmlFor="text" className="sr-only">Email</label>
      {/* ::Input */}
      <input type="email" id="email" name="email"
        placeholder="myaddress@example.com"
        className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-green-500 focus:ring-0"
      />
    </div>

    {/* :PASSWORD INPUT -> BOTTOM BORDER AND NO VISIBLE LABEL */}
    <div>
      {/* ::Label */}
      <label htmlFor="password" className="sr-only">Password</label>
      {/* ::Input */}
      <input type="password" id="password" name="password"
        placeholder="Enter your password"
        className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-blue-500 focus:ring-0"
      />
    </div>

    {/* :TEXT INPUT -> BOTTOM BORDER AND NO VISIBLE LABEL */}
    <div>
      {/* ::Label */}
      <label htmlFor="name" className="sr-only">Name</label>
      {/* ::Input */}
      <input type="text" id="name" name="name"
        placeholder="Enter your name"
        className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0"
      />
    </div>

  </div>
  )
}

export default CardSplitBill

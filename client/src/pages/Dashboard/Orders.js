import React from "react";

const Orders = () => {
  return (
    <section>
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-100 uppercase bg-gray-900">
            <tr>
              <th scope="col" class="py-5 px-6">
                Product name
              </th>

              <th scope="col" class="py-5 px-6">
                Category
              </th>
              <th scope="col" class="py-5 px-6">
                Bid
              </th>

              <th scope="col" class="py-5 px-6">
                Status
              </th>
              <th scope="col" class="py-5 px-6">
                Paid Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b ">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17
              </th>
              <td class="py-4 px-6">Laptop</td>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6">Pending</td>
              <td class="py-4 px-6 bg-gray-800 text-center text-white capitalize text-sm hover:bg-gray-900">
                pay now
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;

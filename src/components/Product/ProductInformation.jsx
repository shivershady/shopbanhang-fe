import React from 'react'

function ProductInformation(props) {
  const {content}=props;
  return (
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 space-y-4">
          <b className="text-2xl font-extrabold">Thông tin chi tiết</b>
          <p>{content}</p>
          {/* <table className="table-fixed border-separate border border-gray-400 w-full text-center">
            <thead>
              <tr>
                <th className="border border-gray-200">Tiêu đề</th>
                <th className="border border-gray-200">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200">Dung lượng pinS</td>
                <td className="border border-gray-200">4500 mAh</td>
              </tr>
              <tr className="bg-emerald-200">
                <td className="border border-gray-200">Bluetooth</td>
                <td className="border border-gray-200">V5.0</td>
              </tr>
              <tr>
                <td className="border border-gray-200">Thương hiệu</td>
                <td className="border border-gray-200">
                  Samsung Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Excepturi debitis deserunt delectus quas rem dolores
                  ratione ex facere assumenda tempore hic libero suscipit sequi
                  harum, veniam, obcaecati illum! Qui, corporis.
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
    )
}

export default ProductInformation

import React from 'react'

function ProductDescription(props) {
  const {description} = props;
    return (
        <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 space-y-4">
          <b className="text-2xl font-extrabold">Mô tả sản phẩm</b>
          <div>
            {description}
          </div>
        </div>
    )
}

export default ProductDescription

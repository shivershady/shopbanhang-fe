const incentives = [
  {
    name: 'Miễn phí vận chuyển',
    description: "Nó không thực sự miễn phí, chúng tôi chỉ định giá nó vào các sản phẩm. Ai đó đang trả tiền cho nó, và đó không phải là chúng tôi.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: 'Hỗ trợ khách hàng 24/7',
    description: 'Tiện ích trò chuyện AI của chúng tôi được hỗ trợ bởi một loạt các câu lệnh if / else ngây thơ. Đảm bảo không gây kích ứng.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Giỏ hàng nhanh',
    description: "Hãy nhìn xem xe đẩy đó chạy nhanh như thế nào. Điều này có ý nghĩa gì đối với trải nghiệm thực tế? Tôi không biết.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
]

export default function HomeQuicklinksTabContainer() {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white px-4 py-10">
      <div className="max-w-full mx-auto">
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="w-28 h-24 mx-auto" src={incentive.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
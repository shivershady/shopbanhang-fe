const callouts = [
  {
    name: 'Bàn và Văn phòng',
    description: 'Làm việc từ các phụ kiện gia đình',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Bàn có đệm bàn bằng da, ngăn bàn làm bằng gỗ óc chó, bàn phím và chuột không dây, và cốc sứ.',
    href: '#',
  },
  {
    name: 'Tự cải thiện',
    description: 'Tạp chí và ghi chú',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Bàn gỗ với cốc sứ, nhật ký bằng da, bút bằng đồng, vòng chìa khóa bằng da và một cây nội thất.',
    href: '#',
  },
  {
    name: 'Du lịch',
    description: 'Thông tin cơ bản về lộ trình đi làm hàng ngày',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Bộ sưu tập bốn chai du lịch cách nhiệt trên kệ gỗ.',
    href: '#',
  },
]

export default function FeaturedCategorises() {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      <div className="max-w-full mx-auto px-8 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-10 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Danh mục sản phẩm</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
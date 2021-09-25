export default function Banner() {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      <div className="max-w-full mx-auto py-10 px-4">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">
                  Nâng cấp bàn làm việc của bạn
                </span>
              </h2>
              <p className="mt-3 text-xl text-white">
                Làm cho bàn của bạn đẹp và có tổ chức. Đăng một bức ảnh lên mạng
                xã hội và xem nó nhận được nhiều lượt thích hơn thông báo thay
                đổi cuộc sống. Suy ngẫm về bản chất nông cạn của sự tồn tại. Ít
                nhất bạn có một thực sự tốt đẹp thiết lập bàn.
              </p>
              <a
                href="#"
                className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Mua sắm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

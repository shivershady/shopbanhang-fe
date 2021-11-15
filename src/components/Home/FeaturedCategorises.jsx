import { Link } from "react-router-dom";


export default function FeaturedCategorises(props) {
  const {categories} = props;
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      <div className="max-w-full mx-auto px-8 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-10 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Danh mục sản phẩm</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {categories.map((callout) => (
              <div key={callout.id} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout?.image?.url}
                    alt="Photo"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
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
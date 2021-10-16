import {Link} from 'react-router-dom';

export function Solutions(props) {
  return (
    <nav>
      <ol className="flex space-x-4">
        {props.solutions.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className="p-3 flex items-center rounded-md hover:bg-gray-50"
          >
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              aria-hidden="true"
            />
            <span className="ml-3 text-base font-medium text-gray-900">
              {item.name}
            </span>
          </Link>
        ))}
      </ol>
    </nav>
  );
}

export function SolutionsItem(props) {
  return (
    <nav className="grid gap-y-8">
      {props.solutions.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
        >
          <item.icon
            className="flex-shrink-0 h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
          <span className="ml-3 text-base font-medium text-gray-900">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}

export function Resources(props) {
  return (
    <nav className="order-last">
      <ol className="flex space-x-4">
        {props.resources.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-3 flex items-center rounded-md hover:bg-gray-50"
          >
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              aria-hidden="true"
            />
            <span className="ml-3 text-base font-medium text-gray-900">
              {item.name}
            </span>
          </a>
        ))}
      </ol>
    </nav>
  );
}

export function ResourcesItem(props) {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      {props.resources.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-base font-medium text-gray-900 hover:text-gray-700 flex items-center space-x-2"
        >
          <item.icon
            className="flex-shrink-0 h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
}

export const HeaderTitle = {
  Solutions,
  SolutionsItem,
  Resources,
  ResourcesItem,
};

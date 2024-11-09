import Image from 'next/image';
import { CardProps } from '@/interface/interface';

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 cursor-pointer max-w-xs hover:-translate-y-1">
      <Image
        width={200}
        height={200}
        src={course.image}
        alt={course.name}
        className="w-full h-44 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;

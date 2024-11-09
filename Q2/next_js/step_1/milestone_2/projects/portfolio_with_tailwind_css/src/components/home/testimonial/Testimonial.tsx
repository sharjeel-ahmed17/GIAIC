

import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    name: 'Bill Gates',
    feedback: 'This platform has transformed my career! The courses are well-structured and easy to follow.',
    image: '/images/home/bill_gates.jpg',
  },
  {
    id: 2,
    name: 'Elon Musk',
    feedback: 'I love the flexibility of learning at my own pace. Highly recommend!',
    image: '/images/home/Elon_Musk.jpg',
  },
  {
    id: 3,
    name: 'Mark Zuckerberg',
    feedback: 'The instructors are fantastic, and the content is extremely relevant to my job.',
    image: '/images/home/Mark_Zuckerberg.jpg',
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">What Our Client Say</h2>
      <div className="grid gap-6 max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1"
          >
            <Image
              width={200}
              height={200}
              src={testimonial.image}
              alt={`${testimonial.name}'s photo`}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

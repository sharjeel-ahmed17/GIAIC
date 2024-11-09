import Image from 'next/image';
import './Testimonials.css';
const testimonialsData = [
  {
    id: 1,
    name: 'Bill Gates',
    feedback: 'This platform has transformed my career! The courses are well-structured and easy to follow.',
    image: '/images/home/bill_gates.jpg' // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    feedback: 'I love the flexibility of learning at my own pace. Highly recommend!',
    image: '/images/home/Mark_Zuckerberg.jpg'
  },
  {
    id: 3,
    name: 'Elon Musk',
    feedback: 'The instructors are fantastic, and the content is extremely relevant to my job.',
    image: '/images/home/Elon_Musk.jpg'
  },
];
const Testimonial = () => {
  return (
    <section className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <Image width={200} height={200} src={testimonial.image} alt={`${testimonial.name}'s photo`} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial

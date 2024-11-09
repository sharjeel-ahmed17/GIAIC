import Image from 'next/image';
import './Testimonials.css';
const testimonialsData = [
  {
    id: 1,
    name: 'Bill Gates',
    feedback: 'This platform has transformed my career! The courses are well-structured and easy to follow.',
    image: '/images/home/bill_gates.jpg' 
  },
  {
    id: 2,
    name: 'Elon Musk',
    feedback: 'I love the flexibility of learning at my own pace. Highly recommend!',
    image: '/images/home/Elon_Musk.jpg' 
  },
  {
    id: 3,
    name: 'Mark Zuckerberg',
    feedback: 'The instructors are fantastic, and the content is extremely relevant to my job.',
    image: '/images/home/Mark_Zuckerberg.jpg' 
  },
];
const Testimonial = () => {
  return (
    <section className="testimonials-container">
      <h2>What Our Learners Say</h2>
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

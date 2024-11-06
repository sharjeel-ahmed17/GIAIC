import './Testimonials.css';
const testimonialsData = [
  {
    id: 1,
    name: 'Jane Doe',
    feedback: 'This platform has transformed my career! The courses are well-structured and easy to follow.',
    image: 'https://via.placeholder.com/100' // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'John Smith',
    feedback: 'I love the flexibility of learning at my own pace. Highly recommend!',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    name: 'Sarah Lee',
    feedback: 'The instructors are fantastic, and the content is extremely relevant to my job.',
    image: 'https://via.placeholder.com/100'
  },
];
const Testimonial = () => {
  return (
    <section className="testimonials-container">
      <h2>What Our Learners Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={`${testimonial.name}'s photo`} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { person1, person2, person3, qoute } from '../../assets/images/images.js';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    title: "UI/UX Designer",
    text: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    img: person1,
  },
  {
    id: 2,
    name: "Bessie Cooper",
    title: "Creative Director",
    text: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare.",
    img: person2,
  },
  {
    id: 3,
    name: "Jane Cooper",
    title: "Photographer",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse magna quis nibh accumsan venenatis sit amet id orci.",
    img: person3,
  },
  {
    id: 4,
    name: "Bessie Cooper",
    title: "Creative Director",
    text: "This is another testimonial from Bessie Cooper for demonstration purposes. She is a Creative Director.",
    img: person2,
  },
  {
    id: 5,
    name: "John Doe",
    title: "Product Manager",
    text: "A new testimonial to demonstrate a fifth entry. John Doe is a Product Manager.",
    img: person1,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : activeIndex + 1);
  };

  const displayedTestimonials = testimonials.slice(activeIndex * 3, activeIndex * 3 + 3);

  return (
    <div className="bg-def">
      <div className="container">
        <div className="testimonial-section py-5 position-relative">
          <h2 className="text-center mb-4">Clients Testimonial</h2>

          <div className="carousel-arrow left-arrow" onClick={handlePrev}>
            <span>{"<"}</span>
          </div>

          <div className="carousel-arrow right-arrow" onClick={handleNext}>
            <span>{">"}</span>
          </div>

          <div className="d-flex justify-content-center">
            {displayedTestimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card mx-2">
                <div className="d-flex justify-content-start mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-warning">&#9733;</span>
                  ))}
                </div>

                <p className="text-muted mb-4">{testimonial.text}</p>

                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.img}
                    className="rounded-circle"
                    alt={testimonial.name}
                    width="50"
                    height="50"
                  />
                  <div className="ms-3">
                    <h5>{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.title}</small>
                  </div>
                </div>

                <img
                  src={qoute}
                  alt="qoute"
                  className="qoute-img"
                />
              </div>
            ))}
          </div>

          <div className="custom-indicators d-flex justify-content-center mt-3">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
              <span
                key={i}
                className={`indicator-dot ${activeIndex === i ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import "../styles/Testionial.css"; // External CSS
import img1 from "../assets/person1.jpg"; // Update with your image paths
import img2 from "../assets/person2.jpg";
import img3 from "../assets/person3.jpg";

const testimonials = [
  {
    id: 1,
    image: img1,
    text: "Website is not only visually appealing but also highly responsive. The informative content, from case studies to client testimonials.",
    name: "CreepyArtist",
    role: "Marketing Specialist",
  },
  {
    id: 2,
    image: img2,
    text: "Website is not only visually appealing but also highly responsive. The informative content, from case studies to client testimonials.",
    name: "CreepyArtist",
    role: "Marketing Specialist",
  },
  {
    id: 3,
    image: img3,
    text: "Website is not only visually appealing but also highly responsive. The informative content, from case studies to client testimonials.",
    name: "CreepyArtist",
    role: "Marketing Specialist",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-left">
        <h5 className="testimonial-title">Testimonial</h5>
        <h2>Don’t believe us</h2>
        <p>
          At the heart of our approach lies collaboration. We closely collaborate with our
          clients to comprehend their vision.
        </p>
        <div className="testimonial-buttons">
          <button className="arrow-btn">&#8592;</button>
          <button className="arrow-btn">&#8594;</button>
        </div>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <div className="testimonial-content">
              <span className="quote-icon">❝</span>
              <p>{item.text}</p>
              <h4>{item.name}</h4>
              <span className="testimonial-role">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

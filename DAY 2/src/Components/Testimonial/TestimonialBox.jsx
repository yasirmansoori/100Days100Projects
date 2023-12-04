import { useEffect, useState } from "react";
import "./style.css";
import testimonials from "./data.json";

const TestimonialBox = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // To calculate the 3D pop effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // To change the testimonial every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { name, position, photo, text } = testimonials[testimonialIndex];

  // To change the color of the progress bar
  const getDynamicColor = () => {
    const hue = (testimonialIndex * 60) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  // Track mouse position
  const handleMouseMove = (e) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - boundingBox.left) / boundingBox.width;
    const y = (e.clientY - boundingBox.top) / boundingBox.height;
    setMousePosition({ x, y });
  };

  // To calculate the 3D pop effect
  const calculate3DPop = () => {
    const maxRotateX = 20;
    const maxRotateY = 20;
    const rotateX = (mousePosition.y - 0.5) * maxRotateX;
    const rotateY = (mousePosition.x - 0.5) * maxRotateY;
    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  // To calculate the box shadow as the mouse moves
  const calculateBoxShadow = () => {
    const shadowX = (mousePosition.x - 0.5) * 20;
    const shadowY = (mousePosition.y - 0.5) * 20;
    const blur = 30;
    const spread = 5;
    const color = `hsla(0, 0%, 0%, 0.2)`;
    return `${shadowX}px ${shadowY}px ${blur}px ${spread}px ${color}`;
  };

  return (
    <div
      className="testimonial-container noselect"
      onMouseMove={handleMouseMove}
      style={{
        transform: `${calculate3DPop()} scale(0.8)`,
        zIndex: 1,
        boxShadow: calculateBoxShadow(),
      }}
    >
      <div
        className="progress-bar"
        style={{ backgroundColor: getDynamicColor() }}
      ></div>
      <p className="testimonial">{text}</p>
      <div className="user">
        <img src={photo} alt="user" className="user-image" />
        <div className="user-details">
          <h4 className="username">{name}</h4>
          <p className="role">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;

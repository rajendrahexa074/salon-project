import React, { useEffect, useState } from 'react';
import '../../../../css/Home.css';
import { useDispatch } from 'react-redux';
import { getFacilitieList } from '../../../../store/slice/FacilitySlice';
import { toast } from 'react-toastify';
import { useLoading } from '../../../../context/LoadingContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const API_URL=process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const { setLoading } = useLoading();
  const navigate=useNavigate();

  const [services, setServices] = useState(
    [
      {
        id: 1,
        name: 'Manicure',
        description: 'Nail trimming, cleaning, and polish.',
        price: 25,
        images: [
          'https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg',
          'https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg',
          'https://chandigarhsalon.com/application/uploads/img/MakeUp.png',
          'https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg'
        ]
      },
      {
        id: 2,
        name: 'Manicure',
        description: 'Nail trimming, cleaning, and polish.',
        price: 25,
        images: [
          'https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg',
          'https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg',
          'https://chandigarhsalon.com/application/uploads/img/MakeUp.png',
          'https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg'
        ]
      },
      {
        id: 3,
        name: 'Manicure',
        description: 'Nail trimming, cleaning, and polish.',
        price: 25,
        images: [
          'https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg',
          'https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg',
          'https://chandigarhsalon.com/application/uploads/img/MakeUp.png',
          'https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg'
        ]
      },
      {
        id: 4,
        name: 'Manicure',
        description: 'Nail trimming, cleaning, and polish.',
        price: 25,
        images: [
          'https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg',
          'https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg',
          'https://chandigarhsalon.com/application/uploads/img/MakeUp.png',
          'https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg'
        ]
      },
      {
        id: 5,
        name: 'Manicure',
        description: 'Nail trimming, cleaning, and polish.',
        price: 25,
        images: [
          'https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg',
          'https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg',
          'https://chandigarhsalon.com/application/uploads/img/MakeUp.png',
          'https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg'
        ]
      },
      {
        id: 6,
        name: 'Manicure',
        description: 'Nail trimming, cleaning, and polish.',
        price: 25,
        images: [
          'https://chandigarhsalon.com/application/uploads/img/SkinCare.jpg',
          'https://chandigarhsalon.com/application/uploads/img/hairCut.jpeg',
          'https://chandigarhsalon.com/application/uploads/img/MakeUp.png',
          'https://chandigarhsalon.com/application/uploads/img/FeetNail.jpg'
        ]
      }
    ]
  )



  useEffect(() => {
    fetchServices()
  }, [dispatch])

  const fetchServices = async () => {
    try {
      setLoading(true);
      const result = await dispatch(getFacilitieList()).unwrap();
      console.log('result', result)
      setServices(result.data);
      setLoading(false);
    } catch (error) {
      toast(error || 'Something went wrong!!');
      setLoading(false);
    }

  }




  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1 className="title">Welcome to Glamour Salon</h1>
          <p className="subtitle">Where beauty meets perfection</p>
          <button className="cta">Book Appointment</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          At Glamour Salon, we provide world-class beauty and wellness services.
          Our expert stylists and relaxing ambiance ensure you leave feeling your best.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="services-page">
          <div className="service-grid">
            {services.map(service => (
              <div key={service._id} className="service-card">
                <div className="image-carousel">
                  {service.images.map((img, idx) => (
                    <img key={idx} src={`${API_URL}/static/${img.storedName}`} alt={`${service.name}-${idx}`} />
                  ))}
                </div>
                <div className="service-info">
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                  <span className="price">${service.price}</span>
                  <button  onClick={()=> navigate(`/customer/book-appointment/${service._id}`)} className="book-btn">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Happy Clients</h2>
        <div className="testimonial">
          <p>"The best salon experience ever! My hair has never looked better."</p>
          <span>- Emma</span>
        </div>
        <div className="testimonial">
          <p>"Loved the ambiance and service. Highly recommend their facials!"</p>
          <span>- Aisha</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-banner">
        <h2>Ready to Look Stunning?</h2>
        <button className="cta">Schedule Your Appointment</button>
      </section>
    </div>
  );
};

export default HomePage;

import React, { useState, } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('characteristics'); // Default active tab

  const properties = [
    {
      id: 1,
      title: 'Барн хаус',
      description: 'Каркасный дом',
      price: '9 000 000 рублей',
      location: 'Приморский край',
      squaremeter: '50 кв.м',
      description2: 'Застройщик акредитован, ипотека Сбербанк, Дом РФ, Маткапитал подходит.',
      images: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
      characteristics: 'Характеристики: Каркасный дом, Приморский край, 50 кв.м',
      projectComposition: 'Состав проекта: А, Б, В',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 3 месяца'
    },
    {
      id: 2,
      title: 'Сакура',
      description: 'Блочный дом',
      price: '7 259 663 рублей',
      location: 'Приморский край',
      squaremeter: '120 кв.м',
      description2: 'Застройщик акредитован, ипотека Сбербанк, Дом РФ, Маткапитал подходит, строительство дома без первоначального взноса, срок строительства: коробка дома - 3 месяца, White box - 6 месяцев, подготовка участка и фасад - считаются индивидуально',
      images: ['/apartment-1.jpg', '/apartment-2.jpg', '/apartment-3.jpg', '/apartment-4.jpg'],
      characteristics: 'Характеристики: Блочный дом, Приморский край, 120 кв.м',
      projectComposition: 'Состав проекта: X, Y, Z',
      payment: 'Оплата: Ипотека, Дом РФ, Маткапитал',
      terms: 'Сроки: 6 месяцев'
    }
  ];

  const handleTitleClick = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setSelectedProperty(null);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? properties[selectedProperty.id - 1].images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % properties[selectedProperty.id - 1].images.length);
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">Добро пожаловать на главную страницу нашего приложения по недвижимости</h1>
      <div className="property-list">
        <h2>Популярные предложения</h2>
        <div className="property-cards">
          {properties.map(property => (
            <div key={property.id}>
              <div className="property-card">
                <h3 onClick={() => handleTitleClick(property)}>{property.title}</h3>
                <p>{property.description}</p>
                <p>{property.price}</p>
                <img src={property.images[0]} alt="Property" onClick={() => handleTitleClick(property)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProperty && isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseForm}>&times;</span>
            <div className="gallery">
              <img src={properties[selectedProperty.id - 1].images[imageIndex]} alt="Property" />
              <button className="prev-btn" onClick={handlePrevImage}>{'<'}</button>
              <button className="next-btn" onClick={handleNextImage}>{'>'}</button>
            </div>
            <div className="property-info">
              <h3>{selectedProperty.title}</h3>
              {activeTab === 'characteristics' && <p>{selectedProperty.characteristics}</p>}
              {activeTab === 'projectComposition' && <p>{selectedProperty.projectComposition}</p>}
              {activeTab === 'payment' && <p>{selectedProperty.payment}</p>}
              {activeTab === 'terms' && <p>{selectedProperty.terms}</p>}
              <div className="tabs">
                <button className={activeTab === 'characteristics' ? 'active' : ''} onClick={() => setActiveTab('characteristics')}>Характеристики</button>
                <button className={activeTab === 'projectComposition' ? 'active' : ''} onClick={() => setActiveTab('projectComposition')}>Состав проекта</button>
                <button className={activeTab === 'payment' ? 'active' : ''} onClick={() => setActiveTab('payment')}>Оплата</button>
                <button className={activeTab === 'terms' ? 'active' : ''} onClick={() => setActiveTab('terms')}>Сроки</button>
              </div>
              <button className="buy-btn">Купить проект</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

import { useState } from 'react';
import dukan from './Images/dukan.png'

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            review: `Another way to improve the readability of a website or app is to use clear and concise
                            navigation. This helps to make it easy for you to find the information or features that you are
                            looking for. It also helps to prevent you from becoming lost or overwhelmed.`,
            logo:'./Images/dukan.png',
            owner:'Jhon Watsone,',
            position:`Associate Director at dukaan.`
        },
        {
            review: `Another way to improve the readability of a website or app is to use clear and concise
                            navigation. This helps to make it easy for you to find the information or features that you are
                            looking for. It also helps to prevent you from becoming lost or overwhelmed.`,
            logo:'./Images/coindcx.png',
            owner:'Sumit Gupta,',
            position:`Founder CoinDCX.`
        }
    ];

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between">
                <button onClick={handlePrev} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {'<'}
                </button>
                <span className="text-gray-600 text-lg">{currentSlide + 1}/{slides.length}</span>
                <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {'>'}
                </button>
            </div>
            <div className="bg-white rounded shadow-md p-6 mt-4">
                <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
                <p className="text-gray-700 mb-4">{slides[currentSlide].text}</p>
                <div className="flex items-center">
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="h-16 w-16 rounded-full mr-4"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{slides[currentSlide].name}</h3>
                        <p className="text-gray-600">{slides[currentSlide].position}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
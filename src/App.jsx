import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import TopPage from "./components/TopPage";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return (
      <SwiperSlide className="card-Slide">
        <Card
          pictureUrl={item.photos[1].pictureUrl}
          rating={item.stars}
          numberOfGuests={item.numberOfGuests}
          roomType={item.roomType}
          name={item.name}
          price={item.pricing.rate.amountFormatted}
        />
      </SwiperSlide>
    );
  });
  return (
    <div className="App">
      <Navbar />
      <TopPage />
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        className="cards-list"
      >
        {cards}
      </Swiper>
    </div>
  );
}

export default App;

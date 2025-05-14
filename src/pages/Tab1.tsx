import { IonContent, IonPage } from '@ionic/react';
import ReusableHeader from '../components/ReusableHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';



const Tab1: React.FC = () => {
  return (
    <IonPage>
      <ReusableHeader title="Account Overview" />
      <IonContent fullscreen>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

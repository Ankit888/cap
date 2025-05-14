import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import ReusableHeader from '../components/ReusableHeader';
const Tab3: React.FC = () => {
  return (
    <IonPage>
      <ReusableHeader title="Payment" />
      <IonContent fullscreen>
      
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

import { IonContent,  IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import ReusableHeader from '../components/ReusableHeader';
const Tab8: React.FC = () => {
  return (
    <IonPage>
      <ReusableHeader title="Billing" />
      <IonContent fullscreen>
       
        <ExploreContainer name="Tab 8 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab8;

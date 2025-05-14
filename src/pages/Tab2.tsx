import { IonContent,  IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ReusableHeader from '../components/ReusableHeader';
const Tab2: React.FC = () => {
  return (
    <IonPage>
     <ReusableHeader title="Meter Read" />
      <IonContent fullscreen>
      
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

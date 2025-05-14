import { IonContent,IonPage, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import ReusableHeader from '../components/ReusableHeader';
const Tab9: React.FC = () => {
  return (
    <IonPage>
      <ReusableHeader title="Account Settings" />
      <IonContent fullscreen>
        <ExploreContainer name="Tab 9 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab9;

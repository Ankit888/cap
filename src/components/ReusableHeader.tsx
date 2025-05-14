import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { notificationsOutline, personCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

interface ReusableHeaderProps {
  title: string;
}

const ReusableHeader: React.FC<ReusableHeaderProps> = ({ title }) => {

     const history = useHistory();

  const openNewPage = () => {
    console.log('Button clicked!'); // Log to console
    history.push('/profile-list'); // pushing a new full page
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle className="ion-text-left">{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon icon={notificationsOutline} />
          </IonButton>
          <IonButton onClick={openNewPage}>
            <IonIcon icon={personCircleOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default ReusableHeader;

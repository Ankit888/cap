import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab9 from './pages/Tab9';
import Tab8 from './pages/Tab8';
import ProfileListPage from './pages/ProfileListPage';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

import Home from './Assets/images/Home.png';
import Meter from './Assets/images/Meter.png';
import Payment from './Assets/images/Payment.png';
import Billing from './Assets/images/Billing.png';
import Settings from './Assets/images/Settings.png';

setupIonicReact();

// ✅ This subcomponent handles tabs + hiding tab bar
const TabsWithConditionalBar: React.FC = () => {
  const location = useLocation();
  const hideTabBarOnRoutes = ['/profile-list']; // list of routes where tab bar is hidden
  const shouldHideTabBar = hideTabBarOnRoutes.includes(location.pathname);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1" component={Tab1} />
        <Route exact path="/tab2" component={Tab2} />
        <Route exact path="/tab3" component={Tab3} />
        <Route exact path="/tab8" component={Tab8} />
        <Route exact path="/tab9" component={Tab9} />
        <Route exact path="/profile-list" component={ProfileListPage} />
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>

      {!shouldHideTabBar && (
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <img src={Home} alt="Home" style={{ width: 24, height: 24 }} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <img src={Meter} alt="Meter" style={{ width: 24, height: 24 }} />
            <IonLabel>Meter read</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <img src={Payment} alt="Payment" style={{ width: 24, height: 24 }} />
            <IonLabel>Payment</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab8" href="/tab8">
            <img src={Billing} alt="Billing" style={{ width: 24, height: 24 }} />
            <IonLabel>Billing</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab9" href="/tab9">
            <img src={Settings} alt="Settings" style={{ width: 24, height: 24 }} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </IonTabs>
  );
};

// ✅ Main App component
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <TabsWithConditionalBar />
    </IonReactRouter>
  </IonApp>
);

export default App;

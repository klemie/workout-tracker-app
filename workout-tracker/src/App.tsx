import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonCardContent, IonContent, IonHeader, IonRouterOutlet, IonCard, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/*Pages*/
import Workout from './pages/workouts'
import Exercises from './pages/excerise'


/* Theme variables */
import './theme/variables.css';
import Exercise from './components/excerciesCards';

const App: React.FC = () => (
  <IonApp>
    <Workout />
    {/* <Exercises /> */}
  </IonApp>
);

export default App;

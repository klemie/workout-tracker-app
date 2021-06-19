// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent,IonDatetime, IonGrid,IonTitle, IonRow, IonCol, IonItem, IonCard, IonCardContent, IonCardHeader, IonHeader, IonSearchbar, IonButton, IonIcon, IonFabButton, IonItemGroup, IonLabel } from '@ionic/react';

//Import icons if needed
import { addOutline, saveOutline, cloudDownloadOutline} from 'ionicons/icons'

//Import custom style sheet 
import '../theme/variables.css';

import Header from '../components/header' 
import TypeButtons from '../components/typeBtns';
import WSearch from '../components/workoutSearch'
import * as moment from 'moment';
//interface for props 
interface Props {
    //areas you can edit from App.tsx
}

//function component declaration 
const Workout: React.FC<Props> = props => {
    // Front End element for UI in the return statement 
    // myDate: String = new Date().toISOString();
    // console.log(myDate('mm/dd/YYYY'));

    return(
        <IonContent >
            <IonGrid>
                <Header title="Workouts" />
                <WSearch />
                <TypeButtons />
            </IonGrid>
            <div>
                {/* circuits */}
                <IonGrid className="ion-no-padding">
                    <IonRow>
                        <IonCol>
                            <IonTitle>
                                Workout Title 
                                <IonDatetime displayFormat="D MMM YYYY H:mm" ></IonDatetime>

                            </IonTitle>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        {/* map through circuits and add like in linear eq solver */}
                        <IonCol>
                            <IonItem className="ion-padding">
                                <IonLabel>
                                    <div id="circuitcolor" className="repCircle exerciseButtonTwo ion-float-left">
                                        4x
                                    </div>
                                    <span className="ion-padding">Circuit 1</span>
                                </IonLabel>
                                <IonItemGroup>
                                    
                                </IonItemGroup>
                            
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </IonContent>
    );
};

export default Workout;
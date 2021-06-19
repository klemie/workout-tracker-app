// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonHeader, IonSearchbar, IonButton, IonIcon, IonFabButton } from '@ionic/react';

//Import icons if needed
import { addOutline } from 'ionicons/icons'

//Import custom style sheet 
import '../theme/variables.css';

// import Header from '../components/header' 
import Exercise from '../components/excerciesCards'
import Header from '../components/header';
import TypeButtons from '../components/typeBtns'
//interface for props 
interface Props {
    //areas you can edit from App.tsx
}

//function component declaration 
const Exercises: React.FC<Props> = props => {
 


    // Front End element for UI in the return statement 
    return(
        <IonContent >
            <IonGrid>
                   <Header title="Excerises" />
                <IonRow>
                    <IonCol size="10">
                       <IonSearchbar mode="ios" className="ion-no-padding" />
                      
                    </IonCol>
                    <IonCol size="2">
                        <IonButton shape="round" size="small" className="loadSaveBtns">
                            <IonIcon slot="icon-only" icon={addOutline} />
                            
                        </IonButton>
                    </IonCol>
                </IonRow>
                <TypeButtons />
            </IonGrid>
            <div>
                <Exercise />
            </div>
        </IonContent>
    );
};

export default Exercises;
// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonHeader, IonSearchbar, IonButton } from '@ionic/react';

//Import icons if needed
import { } from 'ionicons/icons'

//Import custom style sheet 
import '../theme/variables.css';

// import Header from '../components/header' 
import Exercise from '../components/excerciesCards'
//interface for props 
interface Props {
    //areas you can edit from App.tsx
}

//function component declaration 
const Exercises: React.FC<Props> = props => {



    // Front End element for UI in the return statement 
    return(
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        {/* <Header /> */}
                        <IonHeader className="header ion-text-center" >Exercises</IonHeader> 

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                       <IonSearchbar mode="ios"/>
                    </IonCol>
                </IonRow>
                <IonRow >
                    <IonCol size="12" className="exerciseButtonOne" size-sm="4">
                        <IonButton id="btn1"  size="small" shape="round" className="ion-text-center size ion-padding-start">
                            HITT
                        </IonButton>
                    </IonCol>
                    <IonCol size="12" className="exerciseButtonTwo" size-sm="4">
                        <IonButton id="btn2" size="small" shape="round" className="size">
                            Compound
                        </IonButton>
                    </IonCol>
                    <IonCol size="12" className="exerciseButtonThree" size-sm="4">
                        <IonButton id="btn3" size="small" shape="round" className="size" >
                            Functional
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                <IonCol size="12">
                   <Exercise />
                </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Exercises;
// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonHeader, IonSearchbar, IonButton, IonIcon } from '@ionic/react';

//Import icons if needed
import { addOutline } from 'ionicons/icons'

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
    let mainBtnText = {
        "h": "hiit",
        "f": "functional",
        "c": "compound"
    }


    // Front End element for UI in the return statement 
    return(
        <IonContent >
            <IonGrid className="fixed">
                <IonRow>
                    <IonCol>
                        {/* <Header /> */}
                        <IonHeader className="ion-no-border header ion-text-center" >Exercises</IonHeader> 

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                       <IonSearchbar mode="ios" className="search-bar" />
                       <IonButton  shape="round">
                           <IonIcon slot="icon-only" size="small" className="add-btn ion-no-padding" icon={addOutline}></IonIcon>
                       </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow >
                    <IonCol size="4" className="exerciseButtonOne ion-padding-bottom" size-sm="4">
                        <IonButton id="btn1"  size="small" shape="round" className="ion-text-center size ion-padding-start">
                            {mainBtnText.h}
                        </IonButton>
                    </IonCol>
                    <IonCol size="4" className="exerciseButtonTwo" size-sm="4">
                        <IonButton id="btn2" size="small" shape="round" className="size">
                            {mainBtnText.c}
                        </IonButton>
                    </IonCol>
                    <IonCol size="4" className="exerciseButtonThree" size-sm="4">
                        <IonButton id="btn3" size="small" shape="round" className="size" >
                            {mainBtnText.f}
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div className="exerciseContainer">
                <Exercise />
            </div>
        </IonContent>
    );
};

export default Exercises;
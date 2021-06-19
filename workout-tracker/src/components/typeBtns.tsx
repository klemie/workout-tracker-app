// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonHeader, IonSearchbar, IonButton, IonIcon, IonFabButton } from '@ionic/react';

//Import icons if needed
import { addOutline, saveOutline, cloudDownloadOutline} from 'ionicons/icons'

//Import custom style sheet 
import '../theme/variables.css';

// import Header from '../components/header' 
//interface for props 
interface Props {
    //areas you can edit from App.tsx
}

//function component declaration 
const TypeButtons: React.FC<Props> = props => {
    let mainBtnText = {
        "h": "hiit",
        "f": "functional",
        "c": "compound"
    }


    // Front End element for UI in the return statement 
    return(
        <IonRow>
            <IonCol size="4" className="exerciseButtonOne ion-padding-bottom" size-sm="4">
                <IonButton id="btn1" size="small" shape="round" className="size">
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
    );
};

export default TypeButtons;
// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonHeader, IonSearchbar, IonButton } from '@ionic/react';

//Import icons if needed
import { } from 'ionicons/icons'

//Import custom style sheet 
import '../theme/variables.css';

// import Header from '../components/header' 

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
                        <IonHeader className="header ion-text-center">Exercises</IonHeader> 

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                       <IonSearchbar />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton id="btn1"  size="small" shape="round" className="ion-text-center size ion-padding-start">
                            HITT
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton id="btn2" size="small" shape="round" className="size">
                            Compound
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton id="btn3" size="small" shape="round" className="size">
                            Functional
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardHeader >
                                <div >
                                    Exercise
                                </div>
                            </IonCardHeader>
                            <IonCardContent>
                                <div className="ion-float-left description" >
                                
                                </div>
                                <div className="ion-float-right description" >
                                    <p>-------</p>
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Exercises;
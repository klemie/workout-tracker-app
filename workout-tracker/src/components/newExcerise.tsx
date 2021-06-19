// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonHeader, IonCard } from '@ionic/react';

//Import icons if needed
import { } from 'ionicons/icons'

//Import custom style sheet 
import './component.css';
import Exercise from './excerciesCards';

//interface for props 
interface Props {
    //areas you can edit from App.tsx
}

//function component declaration 
const AddExercise: React.FC<Props> = props => {
     

    // Front End element for UI in the return statement 
    return(
        <IonCard>
            
        </IonCard>
    );
};

export default AddExercise;
// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonHeader } from '@ionic/react';

//Import icons if needed
import { } from 'ionicons/icons'

//Import custom style sheet 
import './component.css';

//interface for props 
interface Props {
    //areas you can edit from App.tsx
}

//function component declaration 
const Header: React.FC<Props> = props => {


    // Front End element for UI in the return statement 
    return(
        <IonHeader>
            Exercises
        </IonHeader>
    );
};

export default Header;
// import '../components/ex.sass'
import '../theme/variables.css';

// Copy this template to make a new component 

import React from 'react';
// You must import every ionic UI component you use in this file 
import { IonContent, IonGrid, IonRow, IonHeader, IonCol, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';

//Import icons if needed
import { } from 'ionicons/icons'

//Import custom style sheet 
// import './component.css';

//interface for props 
interface Props {
    //areas you can edit from App.tsx
    
}

//function component declaration 
const Exercise: React.FC<Props> = props => {
    const exercises = {
        "ex1" : {
            "description": "Test",
            "title": "Exercise 1",
            "reps": 4,
            "type": "functional"
        },
        "ex2" : {
            "description": "Description",
            "title": "Exercise 2",
            "reps": 2,
            "type": "hiit" 
        },
        "ex3" : {
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.",
            "title": "Exercise 3",
            "reps": 5,
            "type": "compound" 
        }
    };
    let exArray = [exercises.ex1,exercises.ex2,exercises.ex3]

    // Front End element for UI in the return statement 
    return(
        <div>
        {exArray.map((exer) =>(
            <div className="ion-padding" >
                    <IonCard className="ion-no-margin" key={exer.toString()} >
                        <IonCardHeader>
                            <IonGrid className="ion-no-padding">
                                <IonRow>
                                    <IonCol size="6">
                                        {exer.title}
                                    </IonCol>
                                    <IonCol size="6" className="exerciseButtonThree">
                                        <div id={exer.type} className="repCircle exerciseButtonTwo">
                                            x{exer.reps}
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            
                        </IonCardHeader>
                        <IonCardContent>
                            <div className="ion-float-left description" >         
                            </div>
                            <div className="ion-padding-bottom ion-float-right description" >
                                <p>{exer.description}</p>
                            </div>
                        </IonCardContent>
                    </IonCard>
               
            </div>
        ))}
   
      </div>
    );
};

export default Exercise;
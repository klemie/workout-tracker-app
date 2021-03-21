import { IonCard, IonCardContent, IonCardHeader, IonSearchbar, IonText } from '@ionic/react';
import './exercise.css';
import React, { useState } from 'react';

interface ContainerProps {
  name: string;
}

const Exercise: React.FC<ContainerProps> = ({ name }) => {
  return (
    //   const [searchValue, setSearchValue] = useState('');
    <IonCard>
        <IonCardContent>
            <IonCardHeader>
                {/* reps */}
                <IonText>
                    x3
                </IonText>
                {/* add/search */}
                <IonSearchbar value="searchValue" onIonChange={e=> setSearchValue(e.detail.value!)}>

                </IonSearchbar>
                {/* type */}
                <IonText>

                </IonText>
            </IonCardHeader>
                {/* description */}
                <div>

                </div>

            
        </IonCardContent>
    </IonCard>
  );
};

export default Exercise;

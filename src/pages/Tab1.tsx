import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import './Tab1.css';
import { tsConstructorType } from '@babel/types';

const Tab1: React.FC = () => {

  const [ barcode , setBarcode ] = useState('');
  
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    setBarcode(data.text);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <h1>Data:{barcode}</h1>
        </div>
        {/* <div>
          <h1>Y</h1>
        </div>
        <div>
          <h1>Z</h1>
        </div>
        <div>
          <h1>TimeStamp</h1>
        </div> */}

        
        
        <IonButton onClick={openScanner}>Read barcode</IonButton>
        {/* <IonButton onClick={stopMonitoring}>Stop monitoring</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

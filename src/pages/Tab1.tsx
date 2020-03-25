import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Histogram } from 'prom-client'
import './Tab1.css';
import { tsConstructorType } from '@babel/types';

const Tab1: React.FC = () => {

  const [ barcode , setBarcode ] = useState('');
  
  const httpRequestDurationMicroseconds = new Histogram({
     name: 'http_request_duration_ms',
     help: 'Duration of HTTP requests in ms',
     labelNames:['route'],
     //buckets for reponse time
     buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]
  });

  httpRequestDurationMicroseconds.observe(10);

  console.log(httpRequestDurationMicroseconds)
  

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
        
        <IonButton>Read barcode</IonButton>
       
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

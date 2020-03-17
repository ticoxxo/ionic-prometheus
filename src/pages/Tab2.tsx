import React,  {useState}  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {  Sensors, TYPE_SENSOR   } from '@ionic-native/sensors';
import './Tab2.css';


const Tab2: React.FC = () => {

  const [light , setLight ] = useState();

  const startMonitoring = async () =>{
    Sensors.enableSensor("LIGHT");
    let data = await Sensors.getState();
    setLight(data);
    Sensors.disableSensor();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        <div>
          <h1>Light level:{light}</h1>
        </div>
       
        <IonButton onClick={startMonitoring}>Start monitoring light</IonButton>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

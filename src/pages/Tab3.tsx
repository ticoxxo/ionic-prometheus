import React,  {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonButton } from '@ionic/react';
import {  Sensors } from '@ionic-native/sensors';
import './Tab3.css';

const Tab3: React.FC = () => {

  const [temp , setTemp ] = useState();

  const startMonitoringTemp = async () =>{
    Sensors.enableSensor("ORIENTATION");
    let data = await Sensors.getState();
    setTemp(data);
    Sensors.disableSensor();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
         
      <div>
          <h1>Orientation :{temp}</h1>
      </div>
      <div>
          <h1>X :{temp.x}</h1>
      </div>
      <div>
          <h1>Y :{temp.y}</h1>
      </div>
      <div>
          <h1>Z :{temp.z}</h1>
      </div>
       
        <IonButton onClick={startMonitoringTemp}>Start monitoring temperature</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

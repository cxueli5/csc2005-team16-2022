import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';



export const BarCodeScannerScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedWasher, setScannedWasher] = useState(null);
  const [scannedEndoscope, setScannedEndoscope] = useState([]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (scannedWasher == null){
        setScanned(true);
        alert(`Washer ${data} has been added to record!`);
        setScannedWasher(data);
        
    }
    else{
        setScanned(true);
        alert(`Endoscope ${data} has been added to record!`);
        // scanning endoscope
        var tempArray = [...scannedEndoscope , data];
        setScannedEndoscope(tempArray);
        

        
    }

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  RenderEndoscopeItem = () =>{
    return(
    <View style={{flex: 1, flexDirection: 'row'}}>
    {scannedEndoscope.map(item => (
        <View style={{backgroundColor: '#DDD', width: 80, borderRadius: 10, height: 50, marginTop: 10, marginLeft: 10}}>
            <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Text style={{fontSize: 20}}>{item}</Text>
            </View>
        </View>
    ))}

    </View>    
    
    )
  }



  

  return (
    <View style={styles.container}>
        <View style={{backgroundColor: '#fff', height: 50}}>
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignSelf: 'center'}}>
        {scannedWasher == null && <Text style={{fontSize: 20}}>Scan Washer Barcode</Text>}
        </View>
        {scanned && scannedWasher!= null && <Button title={'Tap to Scan Endoscopes'} onPress={() => setScanned(false)} />}
        </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{flex: 1}}
      />
      <View style={{backgroundColor: '#fff', height: 250}}>
        <View>
        {scannedWasher != null && <Text style={{fontSize: 20, margin: 10}}>Washer:</Text>}
        {scannedWasher != null && <Text style={{fontSize: 25, marginTop: 10, marginLeft: 10}}>{scannedWasher}</Text>}
        {scannedWasher != null && scannedEndoscope.length > 0 ? <Text style={{fontSize: 20, margin: 10}}>Endoscopes:</Text> : null}
        {scannedWasher != null && scannedEndoscope.length > 0 ? RenderEndoscopeItem() : null}
        {scannedWasher != null && scannedEndoscope.length > 0 ? <TouchableHighlight activeOpacity={0.9} underlayColor="#DDD" onPress={() => {
            navigation.navigate('Washer' , 
                {
                scannedWasher: scannedWasher,
                scannedEndoscope: scannedEndoscope,
                }
            );
            }} style = {{width: 100, height: 40, backgroundColor: '#000',top: 70,  alignSelf: 'center', borderRadius: 15}}>
            <View style={{justifyContent:'center', alignContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Add</Text>
            </View>
          </TouchableHighlight> : null}
        
        </View>
    
        
       
      </View>
      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


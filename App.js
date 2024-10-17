import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  const getRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * -300);
    const randomLeft = Math.floor(Math.random() * 70); 

    return { top: randomTop, left: randomLeft };
  };

  const [buttonPosition, setButtonPosition] = useState({ top:0, left: 10});
  const [visible, setVisible] = useState(false)

  const clickYes = () => {
    setVisible(!visible);
  };

  const clickNo = () => {
    setButtonPosition(getRandomPosition());
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{flex: 1, display : visible ? 'none' : 'flex'}}>
        <View style={styles.question}>
          <Text style={styles.questionText}>Barışalım mı?</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('./assets/giphy.gif')} style={{ width: 300, height: 300 }} />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={clickYes} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Evet</Text>
          </TouchableOpacity>        

          <TouchableOpacity style={[styles.button, buttonPosition]} onPress={clickNo} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Hayır</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, display: visible ? 'flex' : 'none'}}>
        <View style={styles.yesPageTextContainer}>
          <Text style={styles.yesPageText}>Seni Seviyorum</Text>
        </View>

        <View style={styles.yesPageImage}>
          <Image source={require('./assets/dance.gif')} style={{ width: 400, height: 400 }}></Image>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa7c5',
  },
  question: {
    flex: 1,
    justifyContent: 'center',
  },
  questionText: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 90,
  },
  button: {
    backgroundColor: '#fd61b8',
    height: 70,
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  yesPageContainer: {
    flex: 1,
  },
  yesPageImage: {
    flex: 1,
    alignItems: 'center',
  },
  yesPageTextContainer: {
    height: 250,
  },
  yesPageText: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    top: 200,
  }
});

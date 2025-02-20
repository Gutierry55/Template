// src/screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const HomeScreen = () => {
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    const typeStrings = [
      'tratamentos Faciais ',
      'tratamentos corporais',
      'tratamentos capilares',
      'podologia',
      'bem-estar e terapias alternativas'
    ];

    let index = 0;
    const typeInterval = setInterval(() => {
      setTypingText(typeStrings[index]);
      index = (index + 1) % typeStrings.length;
    }, 3000);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bem-vindo à Elysium!</Text>
          <Text style={styles.subtitle}>Nós Somos Especialistas em <Text style={styles.typingText}>{typingText}</Text></Text>
          <Text style={styles.description}>
            Na Clínica Elysium, acreditamos que cada pessoa merece sentir-se bem em sua própria pele.
            Nossa missão é proporcionar tratamentos estéticos de alta qualidade, combinados com um atendimento
            personalizado, para ajudar você a alcançar a sua melhor versão.
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Sobre Nós</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  typingText: {
    color: 'green',  // Cor do texto animado
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default HomeScreen;

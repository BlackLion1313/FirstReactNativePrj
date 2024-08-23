import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedPassword = await AsyncStorage.getItem('diaryPassword');
    if (storedPassword === password) {
      navigation.navigate('Diary');
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 20 },
});

export default LoginScreen;

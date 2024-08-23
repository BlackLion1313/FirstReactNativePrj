import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DiaryScreen = () => {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    const loadEntry = async () => {
      const savedEntry = await AsyncStorage.getItem('diaryEntry');
      if (savedEntry) {
        setEntry(savedEntry);
      }
    };
    loadEntry();
  }, []);

  const saveEntry = async () => {
    await AsyncStorage.setItem('diaryEntry', entry);
    alert('Entry saved!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Diary</Text>
      <TextInput
        style={styles.textArea}
        value={entry}
        onChangeText={setEntry}
        multiline
        placeholder="Write your thoughts..."
      />
      <Button title="Save" onPress={saveEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  textArea: { height: 300, padding: 10, borderColor: 'gray', borderWidth: 1, textAlignVertical: 'top' },
});

export default DiaryScreen;

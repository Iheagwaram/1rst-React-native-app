import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Registering:', { username, password });
    router.push('/'); // Redirect to index page after registration
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />
        <View style={styles.spacer} />
        <View style={styles.smallButton}>
          <Button title="Go to Login" onPress={() => router.push('/login')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  spacer: {
    width: 20,
  },
  smallButton: {
    transform: [{ scale: 0.8 }],
  },
});

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SOSScreen() {
  const sendSOS = () => {
    // Placeholder for SOS logic (Twilio + what3words)
    alert("SOS Sent!");
  };

  return (
    <View>
      <Text>SOS Screen</Text>
      <Button title="Send SOS" onPress={sendSOS} />
    </View>
  );
}
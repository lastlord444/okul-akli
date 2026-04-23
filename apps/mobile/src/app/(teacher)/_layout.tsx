// Okul Aklı - Öğretmen Paneli Layout
import { Stack } from 'expo-router';
import * as React from 'react';

export default function TeacherLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Öğretmen Paneli',
          headerBackTitle: 'Geri',
        }}
      />
    </Stack>
  );
}

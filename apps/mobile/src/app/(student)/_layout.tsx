// Okul Aklı - Öğrenci Paneli Layout
import { Stack } from 'expo-router';
import * as React from 'react';

export default function StudentLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Öğrenci Paneli',
          headerBackTitle: 'Geri',
        }}
      />
    </Stack>
  );
}

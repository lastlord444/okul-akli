// Okul Aklı - Veli Paneli Layout
import { Stack } from 'expo-router';
import * as React from 'react';

export default function ParentLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Veli Paneli',
          headerBackTitle: 'Geri',
        }}
      />
    </Stack>
  );
}

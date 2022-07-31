import React from "react";
import { NativeBaseProvider, StatusBar, Flex, Text } from "native-base";
import { Input } from '@/components'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Flex flex={1} align="center" justify="center">
        <Text fontSize="2xl">Hello world</Text>
        <Input />
      </Flex>
    </NativeBaseProvider>
  );
}
import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} /> 
      <Stack.Screen name="refregister" options={{title:"Register"}}/>
    </Stack>
  );
}

import { ClerkProvider,ClerkLoaded, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import LoginScreen from '../components/LoginScreen'
export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>  
        <SignedIn>  
    <Stack screenOptions={{ 
      headerShown: false
    }} >
      <Stack.Screen name="(tabs)" />
    </Stack>
    </SignedIn>
    <SignedOut> 
      <LoginScreen/>
    </SignedOut>
    </ClerkLoaded>
      </ClerkProvider>
  );
}
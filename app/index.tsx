import { Redirect } from 'expo-router';

export default function Index() {
  // You can add logic here to determine where to redirect
  // based on the user's state (e.g., logged in, completed onboarding, etc.)
  return <Redirect href="/(onboarding)/onboarding" />;
}
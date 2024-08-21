import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="explore"  />
      {/* Add other tab screens here */}
    </Tabs>
  );
}
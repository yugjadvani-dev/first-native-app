import React from 'react';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import {SafeAreaView, ScrollView, View} from 'react-native';
import FancyCard from './src/components/FancyCard';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ContactList />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

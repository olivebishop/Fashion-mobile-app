import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container} className='mt-6'>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/three.jpg')} 
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton}>
          <FontAwesome name="pencil" size={16} color="white" />
        </TouchableOpacity>
        <Text style={styles.profileName}>Angie Brekke</Text>
      </View>

      <View style={styles.menu}>
        <MenuItem icon="user" text="Your profile" />
        <MenuItem icon="credit-card" text="Payment Methods" />
        <MenuItem icon="shopping-bag" text="My Orders" />
        <MenuItem icon="cog" text="Settings" />
        <MenuItem icon="info-circle" text="Help Center" />
        <MenuItem icon="lock" text="Privacy Policy" />
        <MenuItem icon="users" text="Invites Friends" />
        <MenuItem icon="sign-out" text="Log out" />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <FontAwesome name={icon} size={24} color="black" />
    <Text style={styles.menuText}>{text}</Text>
    <FontAwesome name="chevron-right" size={24} color="black" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editButton: {
    position: 'absolute',
    right: 110,
    bottom: 10,
    backgroundColor: '#000',
    padding: 4,
    borderRadius: 12,
  },
  profileName: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
});

export default ProfileScreen;

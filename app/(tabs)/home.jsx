import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <Text style={styles.lastUpdateText}>Last Update 18 Aug 2024</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png' }} // Profile image URL
          style={styles.profileImage}
        />
      </View>

      {/* Menu Section */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('profile')}>
          <Image 
            source={{ uri: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png' }} // Replace with your account icon URL
            style={styles.menuIcon} 
          />
          <Text style={styles.menuText}>My Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('explore')}>
          <Image 
            source={{ uri: 'http://www.pngmart.com/files/8/Inventory-PNG-Pic.png' }} // Replace with your inventory icon URL
            style={styles.menuIcon} 
          />
          <Text style={styles.menuText}>Inventory</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('explore')}>
          <Image 
            source={{ uri: 'https://www.libertymechanics.com.au/wp-content/uploads/2016/05/MechanicJoe2.png' }} // Replace with your mechanic icon URL
            style={styles.menuIcon} 
          />
          <Text style={styles.menuText}>Search Mechanic</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('explore')}>
          <Image 
            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/computer-programming-dazzle-vol-1/256/Feature_Requests-1024.png' }} // Replace with your request icon URL
            style={styles.menuIcon} 
          />
          <Text style={styles.menuText}>Request</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('explore')}>
          <Image 
            source={{ uri: 'https://www.kelsiem.com/hs-fs/hubfs/Analytics-icon.png?width=3710&name=Analytics-icon.png' }} // Replace with your analytics icon URL
            style={styles.menuIcon} 
          />
          <Text style={styles.menuText}>Analytics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('bluetooth')}>
          <Image 
            source={{ uri: 'https://www.pngarts.com/files/3/Bluetooth-PNG-Download-Image.png' }} // Replace with your contact icon URL
            style={styles.menuIcon} 
          />
          <Text style={styles.menuText}>Bluetooth</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#0A74DA',
  },
  header: {
    backgroundColor: '#9B30FF',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop:50,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  lastUpdateText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  profileContainer: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#ffe600',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuContainer: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  menuItem: {
    width: '40%',
    backgroundColor: '#f0f4f8',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});

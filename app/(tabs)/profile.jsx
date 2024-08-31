import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useAuth, useUser } from '@clerk/clerk-expo';

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();  // Corrected this to "signOut" which is likely the correct method name.
  const [isShiftModalVisible, setShiftModalVisible] = useState(false);
  const [isWorkDetailsModalVisible, setWorkDetailsModalVisible] = useState(false);

  const toggleShiftModal = () => {
    setShiftModalVisible(!isShiftModalVisible);
  };

  const toggleWorkDetailsModal = () => {
    setWorkDetailsModalVisible(!isWorkDetailsModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Centered Profile Image and Name */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user?.fullName}</Text>
      </View>

      {/* Manage User Section */}
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <Ionicons name="person-circle-outline" size={24} color="#FF6347" />
          <Text style={styles.sectionText}>Manage user</Text>
          <MaterialIcons name="chevron-right" size={24} color="#C0C0C0" />
        </View>
      </View>

      {/* Shift Work Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem} onPress={toggleShiftModal}>
          <Ionicons name="time-outline" size={24} color="#1E90FF" />
          <Text style={styles.sectionText}>Shift Work</Text>
          <MaterialIcons name="chevron-right" size={24} color="#C0C0C0" />
        </TouchableOpacity>
      </View>

      {/* Work Details Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem} onPress={toggleWorkDetailsModal}>
          <Ionicons name="briefcase-outline" size={24} color="#7B68EE" />
          <Text style={styles.sectionText}>Work Details</Text>
          <MaterialIcons name="chevron-right" size={24} color="#C0C0C0" />
        </TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={signOut} >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Shift Modal */}
      <Modal
        transparent={true}
        visible={isShiftModalVisible}
        animationType="slide"
        onRequestClose={toggleShiftModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Shift Work</Text>
            <Text style={styles.modalText}>1st Shift: 8:00 AM - 4:00 PM</Text>
            <Text style={styles.modalText}>2nd Shift: 4:00 PM - 12:00 AM</Text>
            <Text style={styles.modalText}>3rd Shift: 12:00 AM - 8:00 AM</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleShiftModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Work Details Modal */}
      <Modal
        transparent={true}
        visible={isWorkDetailsModalVisible}
        animationType="slide"
        onRequestClose={toggleWorkDetailsModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Work Details</Text>
            {/* Add detailed work information here */}
            <Text style={styles.modalText}>Your work details go here...</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleWorkDetailsModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A74DA',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    marginVertical: 20,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 18,
    marginLeft: 10,
  },
  signOutButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 18,
    color: '#1E90FF',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

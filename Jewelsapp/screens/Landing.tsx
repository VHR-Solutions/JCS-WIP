
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App: React.FC = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
            <FontAwesome name="bars" size={24} color="black" />
            <View style={styles.logoContainer}>
        <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} />
        <Image
              style={{ resizeMode: "cover" }}
              //className="w-full flex-1"
              source={require("@/assets/planes.png")}
            />
                <Text style={styles.headerText}>Jewel Creations</Text>
            </View>
            <View style={styles.notificationContainer}>
                <FontAwesome name="bell" size={24} color="black" />
                <View style={styles.notificationBadge}>
                    <Text style={styles.notificationText}>6</Text>
                </View>
            </View>
        </View>
        <Text style={styles.updateText}>Rate updated on 10:55 AM 27-Aug-2024</Text>
        <View style={styles.rateContainer}>
            <View style={styles.rateBox}>
                {/* <FontAwesome name="coin" size={24} color="#FFD700" /> */}
                <FontAwesome name="pie-chart" icon={'function'} />
                <Text style={styles.rateText}>₹ 6,694</Text>
                <Text style={styles.rateSubText}>22KT Per Gram</Text>
            </View>
            <View style={styles.rateBox}>
                <FontAwesome name="line-chart" size={24} color="#A9A9A9" />
                <Text style={styles.rateText}>₹ 93.50</Text>
                <Text style={styles.rateSubText}>Per Gram</Text>
            </View>
        </View>
        <View style={styles.gridContainer}>
            <TouchableOpacity style={styles.gridItem}>
                <FontAwesome name="random" size={24} color="white" />
                <Text style={styles.gridText}>Join Scheme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
                <FontAwesome name="bandcamp" size={24} color="white" />
                <Text style={styles.gridText}>My Scheme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
                <FontAwesome name="folder-o" size={24} color="white" />
                <Text style={styles.gridText}>Brochure</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
                <FontAwesome name="user-md" size={24} color="white" />
                <Text style={styles.gridText}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
                <FontAwesome name="whatsapp" size={24} color="white" />
                <Text style={styles.gridText}>Customer Care</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
            <FontAwesome name="building-o" size={24} color="white" />
                <Text style={styles.gridText}>Branches</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.adContainer}>
            <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/collections/JadauRings_1920x.jpg?v=1657794728' }} style={styles.adImage} />
            <View style={styles.adTextContainer}>
                <Text style={styles.adSubText}>LATEST COLLECTION</Text>
                <Text style={styles.adTitle}>Wedding Rings</Text>
                <Text style={styles.adSubText}>at an unbelievable price</Text>
                <TouchableOpacity style={styles.adButton}>
                    <Text style={styles.adButtonText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    padding: 16,
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode:'contain',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF0000',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
  updateText: {
    textAlign: 'center',
    color: '#4B5563',
    fontSize: 12,
    marginVertical: 8,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  rateBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  rateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  rateSubText: {
    color: '#6B7280',
    fontSize: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#1E3A8A',
    width: '30%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  gridText: {
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
  },
  adContainer: {
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
  },
  adImage: {
    width: '100%',
    height: 150,
    resizeMode:'contain'
  },
  adTextContainer: {
    padding: 16,
    alignItems: 'center',
  },
  adSubText: {
    color: '#6B7280',
    fontSize: 12,
  },
  adTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  adButton: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  adButtonText: {
    color: 'white',
  },
});

export default App;
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https:links.papareact.com/gzs" }}
        />
         <GooglePlacesAutocomplete
          placeholder="Where From?"
         styles={{
          container:{
            flex: 0,
          },
          textInput:{
            fontSize: 18,
          }
         }}
         onPress={(data, details = null) => {
          console.log(data)
          console.log(details)
         }}
         enablePoweredByContainer={false}
         minLength={2}
         query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
         }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
    />
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});

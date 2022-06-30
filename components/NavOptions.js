import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";


const data = [
  {
    id: "123",
    title: "get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Orden Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image
                    style={{width:120, height:120 , resizeMode: "contain"}}
                    source={{ uri: item.image }}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

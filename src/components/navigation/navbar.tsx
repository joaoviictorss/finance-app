import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const NavBar = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          ...styles.container,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconFocused : styles.icon}>
              <Image
                source={require("../../assets/icons/home-icon.svg")}
                style={styles.image}
                contentFit="contain"
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconFocused : styles.icon}>
              <Image
                source={require("../../assets/icons/analysis-icon.svg")}
                style={styles.image}
                contentFit="contain"
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconFocused : styles.icon}>
              <Image
                source={require("../../assets/icons/transactions-icon.svg")}
                style={styles.image}
                contentFit="contain"
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconFocused : styles.icon}>
              <Image
                source={require("../../assets/icons/category-icon.svg")}
                style={styles.image}
                contentFit="contain"
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconFocused : styles.icon}>
              <Image
                source={require("../../assets/icons/profile-icon.svg")}
                style={styles.image}
                contentFit="contain"
              />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DFF7E2",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    height: 100,
    paddingHorizontal: 30,
    elevation: 0,
    borderTopColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  icon: {},
  iconFocused: {
    backgroundColor: "#00D09E",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default NavBar;

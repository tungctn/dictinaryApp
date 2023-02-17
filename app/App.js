import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import { getWord } from "./api/word";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    getWord().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dictionary" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

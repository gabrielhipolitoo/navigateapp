import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.router";

const Stack = createStackNavigator();

export default function DrawerRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={TabRoutes} />
    </Stack.Navigator>
  );
}

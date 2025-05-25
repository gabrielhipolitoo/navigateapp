import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabRoutes from "./tab.router";
import DrawerRoutes from "./drawer.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}

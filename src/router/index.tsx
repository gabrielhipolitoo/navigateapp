import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabRoutes from "./tab.router";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';

const MenuItems = ({}) => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  return (
    <Provider>
      <View style={styles.container}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={() => openMenu()} mode="outlined">
              Show menu
            </Button>
          }
        >
          <Menu.Item
            title="Print"
          />
          <Menu.Item
            title="Forward"
          />
          <Menu.Item
            title="Backward"
          />
          <Menu.Item
            title="Save"
          />
        </Menu>
      </View>
    </Provider>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
  },
});

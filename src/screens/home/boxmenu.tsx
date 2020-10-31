import React from 'react';
import { View, Image } from 'react-native';
import Text from '@components/text';
import styles from './styles';

interface IBoxMenu {
  image: any;
  title: string;
  value: string;
}

const BoxMenu: React.FC<IBoxMenu> = ({ image, title, value }) => {
  return (
    <View style={styles.listMenuBox}>
      <Image source={image} style={styles.iconSize} />
      <Text type="semibold" size={18}>
        {title}
      </Text>
      <Text size={16}>{value}</Text>
    </View>
  );
};

export default BoxMenu;

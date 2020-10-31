import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { fs } from './responsive';

interface IText {
  type?: 'thin' | 'regular' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  size?: number;
  style?: StyleProp<TextStyle>;
  color?: string;
  children: React.ReactNode;
}

const MyText: React.FC<IText> = ({ type, style, size, align, children, color }) => {
  const textStyles = [
    type === 'regular' && styles.regular,
    type === 'thin' && styles.thin,
    type === 'semibold' && styles.semibold,
    type === 'bold' && styles.bold,
  ];

  const alignText = {
    textAlign: align ? align : 'left',
  };

  const textSize = {
    fontSize: size ? fs(size) : fs(9),
  };

  const colorStyle = [{ color }];

  return <Text style={[textStyles, textSize, alignText, colorStyle, style]}> {children}</Text>;
};

MyText.defaultProps = {
  type: 'regular',
  size: 9,
  align: 'left',
};

const styles = StyleSheet.create({
  thin: {
    fontFamily: 'Poppins-Light',
  },
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default MyText;

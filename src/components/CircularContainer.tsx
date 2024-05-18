import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
  size: number;
  backgroundColor?: string;
  borderColor?: string;
}

function CircularBox({
  children,
  size,
  borderColor,
  backgroundColor,
}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View
        style={StyleSheet.compose(styles.circle, {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 1,
          borderColor: borderColor || '#ccc',
          backgroundColor: backgroundColor || '#fff',
        })}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
  circle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircularBox;

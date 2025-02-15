import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type DetailItemProps = {
  title: string;
  value: string;
};

const DetailItem = ({ title, value }: DetailItemProps) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.titleText}>{title} </Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 6,
    width: 100,
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
});

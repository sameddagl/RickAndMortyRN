import { ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

type LoadingIndicatorProps = {
  size?: 'small' | 'large';
};

const LoadingIndicator = ({ size = 'large' }: LoadingIndicatorProps) => {
  return <ActivityIndicator size={size} color="blue" style={{ padding: 12 }} />;
};

export default LoadingIndicator;

const styles = StyleSheet.create({});

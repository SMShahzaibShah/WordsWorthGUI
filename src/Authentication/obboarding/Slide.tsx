import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
interface SlideProps {
  label: string;
  right?: boolean;
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {},
  title: {
      fontSize: 80,
      fontFamily: "SFProText-Bold"
  },
});
const Slide = ({ label, right }: SlideProps) => {
  return (
    <View style={{ width }}>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};
export default Slide;

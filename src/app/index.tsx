import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "http://localhost:5173/" }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: "100%",
  },
});

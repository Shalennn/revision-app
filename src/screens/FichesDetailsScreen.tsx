import React, { useRef, useState, useContext } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "../data/ThemeContext";
import { createFichesStyles } from "../styles/fichesStyles";

const { width } = Dimensions.get("window");

export default function FicheDetailScreen({ route, navigation }: any) {
  const { fiches, index } = route.params;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(index);

  const { theme } = useContext(ThemeContext);
  const styles = createFichesStyles(theme);

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      pagingEnabled
      data={fiches}
      initialScrollIndex={index}
      keyExtractor={(item) => item.id}
      getItemLayout={(_, i) => ({
        length: width,
        offset: width * i,
        index: i,
      })}
      onScrollToIndexFailed={(info) => {
        setTimeout(() => {
          flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
        }, 100);
      }}
      onMomentumScrollEnd={(e) => {
        const i = Math.round(e.nativeEvent.contentOffset.x / width);
        setCurrentIndex(i);
      }}
      renderItem={({ item }) => (
        <View style={[styles.detailContainer, { width }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: theme.primary, marginBottom: 10 }}>
              Retour à la liste
            </Text>
          </TouchableOpacity>
          <Text style={styles.detailTitle}>{item.titre}</Text>
          <Text style={styles.detailContent}>{item.contenu}</Text>
          <Text
            style={{
              marginTop: 20,
              textAlign: "center",
              color: theme.subtext,
            }}
          >
            Fiche {currentIndex + 1} / {fiches.length}
          </Text>
        </View>
      )}
    />
  );
}

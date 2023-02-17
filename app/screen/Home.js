import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { getWord, translateWord } from "../api/word";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const onValueChange = (e) => {
    setSearchTerm(e);
  };

  const handleSearch = async () => {
    const response = await getWord();
    console.log(response.msg);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search term"
        style={styles.input}
        onChangeText={onValueChange}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <Text>Search term: {searchTerm}</Text>
      {searchResults && <Text>Search results: {}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default Home;

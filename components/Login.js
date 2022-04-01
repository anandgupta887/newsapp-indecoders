import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { NewsContext } from "../API/Context";

const getMessage = (text) => {
  if (text.includes("auth/wrong-password")) {
    return "Please enter a valid password";
  } else if (text.includes("auth/user-not-found")) {
    return "User doesn't exist";
  } else if (text.includes("auth/invalid-email")) {
    return "Input is not an email";
  } else {
    return text;
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { authData, setAuthData } = useContext(NewsContext);
  const handleLogin = async (email, password) => {
    setLoader(true);
    // Alert.alert("hello", email, password);
    if (!email || !password) {
      setLoader(false);
      return Alert.alert("Alert", "Please enter email & password", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      try {
        await auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setAuthData(user);
            setLoader(false);
          });
      } catch (error) {
        setLoader(false);
        Alert.alert("Alert", getMessage(error.message), [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    }
  };

  return (
    <View style={styles.loginContainer}>
      {loader ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQY3UwfG60sU5D5_ZkJgBu6BYj_CcD-fjQrAT2FwiXaFjb65PTs",
                height: 100,
                width: 100,
              }}
            />
          </View>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(e) => {
              setEmail(e);
            }}
            placeholder="Enter email"
            placeholderTextColor={"white"}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(e) => {
              setPassword(e);
            }}
            placeholder="Enter password"
            placeholderTextColor={"white"}
          />
          <Pressable
            style={styles.button}
            onPress={() => handleLogin(email, password)}
            color="#841584"
            disabled={!email || !password}
          >
            <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
              Login
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 16,
    marginTop: "auto",
    marginBottom: "auto",
  },
  imageContainer: {
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    marginBottom: 16,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
    backgroundColor: "black",
    color: "white",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "black",
  },
});

export default Login;

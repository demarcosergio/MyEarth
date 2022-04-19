import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//import { level_four, level_P_one, level_S_two } from "../API/data";
import {
  pre_questionaire,
  post_questionaire,
  level_G_one_db,
  level_P_one_db,
  level_S_one_db,
  level_S_two_db,
  level_four_db,
  level_one_two_db,
  level_three_db,
  level_two_one_db,
  level_two_two_db,
  level_two_three_db,
  level_G_two_db,
} from "../API/firebaseMethods";

//var db = firebaseApp.firestore();

export default function Detail({ route, navigation }) {
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");
  const [answerSix, setAnswerSix] = useState("");
  const [answerSeven, setAnswerSeven] = useState("");
  const [answerEight, setAnswerEight] = useState("");
  const [answerNine, setAnswerNine] = useState("");
  const [answerTen, setAnswerTen] = useState("");
  const [answerEleven, setAnswerEleven] = useState("");

  const emptyState = () => {
    setAnswerOne("");
    setAnswerTwo("");
    setAnswerThree("");
    setAnswerFour("");
    setAnswerFive("");
    setAnswerSix("");
    setAnswerSeven("");
    setAnswerEight("");
    setAnswerNine("");
    setAnswerTen("");
    setAnswerEleven("");
  };
  const {
    level_one_one_obj,
    level_one_two_obj,
    level_two_one_obj,
    level_two_two_obj,
    level_two_three_obj,
    level_three_obj,
    level_four_obj,
    level_S_one_obj,
    level_S_two_obj,
    level_G_one_obj,
    level_G_Two_obj,
    level_P_one_obj,
    level_G_two_obj,
  } = route.params.data;
  const { type } = route.params;

  const handlePress = () => {
    if (type == "1.2") {
      level_one_two_db(answerOne, answerTwo, answerThree);
    } else if (type == "2.1") {
      level_two_one_db(
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        answerFive
      );
    } else if (type == "2.2") {
      level_two_two_db(answerOne);
    } else if (type == "2.3") {
      console.log("inside type 2.3");
      level_two_three_db(
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        answerFive,
        answerSix
      );
    } else if (type == "3") {
      level_three_db(answerOne);
    } else if (type == "4") {
      level_four_db(answerOne, answerTwo);
    } else if (type == "S1") {
      level_S_one_db(answerOne, answerTwo);
    } else if (type == "S2") {
      level_S_two_db(answerOne);
    } else if (type == "G1") {
      level_G_one_db(answerOne, answerTwo, answerThree, answerFour, answerFive);
    } else if (type == "G2") {
      level_G_two_db(
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        answerFive,
        answerSix
      );
    } else if (type == "P1") {
      level_P_one_db(answerOne, answerTwo, answerThree, answerFour, answerFive);
    } else if (type == "pre-questionnaire") {
      pre_questionaire(
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        answerFive,
        answerSix,
        answerSeven,
        answerEight,
        answerNine,
        answerTen,
        answerEleven
      );
    } else if (type == "post-questionnaire") {
      post_questionaire(
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        answerFive,
        answerSix,
        answerSeven,
        answerEight,
        answerNine,
        answerTen,
        answerEleven
      );
    }
    emptyState();
  };

  let render;
  //  const { name, origin, info } = route.params.data;

  //render = <Text>itemId: {JSON.stringify(name)}</Text>;
  //---------------------start of conditional render--------------------------------------
  //const { title, info, info_one, info_two, info_three, header_one, header_two, header_three, type} = route.params.data;

  //const { title, info, header_one, type} = route.params.level_three;
  let sub_render;
  if (type == "2.2" || type == "3" || type == "S2") {
    {
      if (type == "2.2") {
        sub_render = [
          <Text style={styles.title}>{level_two_two_obj.title}</Text>,
          <Text style={styles.info}>{level_two_two_obj.info}</Text>,
          <Text style={styles.label}>{level_two_two_obj.header_one}</Text>,
        ];
      } else if (type == "3") {
        sub_render = [
          <Text style={styles.title}>{level_three_obj.title}</Text>,
          <Text style={styles.info}>{level_three_obj.info}</Text>,
          <Text style={styles.label}>{level_three_obj.header_one}</Text>,
        ];
      } else if (type == "S2") {
        sub_render = [
          <Text style={styles.title}>{level_S_two_obj.title}</Text>,
          <Text style={styles.info}>{level_S_two_obj.info}</Text>,
          <Text style={styles.label}>{level_S_two_obj.header_one}</Text>,
        ];
      }
    }
    render = [
      sub_render,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
      />,
    ];
  } else if (type == "4" || type == "S1") {
    {
      if (type == "4") {
        sub_render = [
          <Text style={styles.title}>{level_four_obj.title}</Text>,
          <Text style={styles.info}>{level_four_obj.info}</Text>,
          <Text style={styles.label}>{level_four_obj.header_one}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer one*"
            value={answerOne}
            onChangeText={(answer) => setAnswerOne(answer)}
          />,
          <Text style={styles.label}>{level_four_obj.header_two}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer two*"
            value={answerTwo}
            onChangeText={(answer) => setAnswerTwo(answer)}
          />,
        ];
      } else if (type == "S1") {
        sub_render = [
          <Text style={styles.title}>{level_S_one_obj.title}</Text>,
          <Text style={styles.info}>{level_S_one_obj.info}</Text>,
          <Text style={styles.label}>{level_S_one_obj.header_one}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer one*"
            value={answerOne}
            onChangeText={(answer) => setAnswerOne(answer)}
          />,
          <Text style={styles.label}>{level_S_one_obj.header_two}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer two*"
            value={answerTwo}
            onChangeText={(answer) => setAnswerTwo(answer)}
          />,
        ];
      }
    }
    render = sub_render;
  } else if (type == "1.2") {
    render = [
      <Text style={styles.title}>{level_one_two_obj.title}</Text>,
      <Text style={styles.info}>{level_one_two_obj.info}</Text>,
      <Text style={styles.label}>{level_one_two_obj.header_one}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
      />,

      <Text style={styles.label}>{level_one_two_obj.header_two}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerTwo}
        onChangeText={(answer) => setAnswerTwo(answer)}
      />,
      <Text style={styles.label}>{level_one_two_obj.header_three}</Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer three*"
        value={answerThree}
        onChangeText={(answer) => setAnswerThree(answer)}
      />,
    ];
  } else if (type == "2.1" || type == "G1" || type == "P1") {
    {
      if (type == "2.1") {
        sub_render = [
          <Text style={styles.title}>{level_two_one_obj.title}</Text>,
          <Text style={styles.info}>{level_two_one_obj.info}</Text>,
          <Text style={styles.label}>{level_two_one_obj.header_one}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer one*"
            value={answerOne}
            onChangeText={(answer) => setAnswerOne(answer)}
          />,
          <Text style={styles.label}>{level_two_one_obj.header_two}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer two*"
            value={answerTwo}
            onChangeText={(answer) => setAnswerTwo(answer)}
          />,
          <Text style={styles.label}>{level_two_one_obj.header_three}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer three*"
            value={answerThree}
            onChangeText={(answer) => setAnswerThree(answer)}
          />,
          <Text style={styles.label}>{level_two_one_obj.header_four}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer four*"
            value={answerFour}
            onChangeText={(answer) => setAnswerFour(answer)}
          />,
          <Text style={styles.label}>{level_two_one_obj.header_five}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer five*"
            value={answerFive}
            onChangeText={(answer) => setAnswerFive(answer)}
          />,
        ];
      } else if (type == "G1") {
        sub_render = [
          <Text style={styles.title}>{level_G_one_obj.title}</Text>,
          <Text style={styles.info}>{level_G_one_obj.info}</Text>,
          <Text style={styles.label}>{level_G_one_obj.header_one}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer one*"
            value={answerOne}
            onChangeText={(answer) => setAnswerOne(answer)}
          />,
          <Text style={styles.label}>{level_G_one_obj.header_two}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer two*"
            value={answerTwo}
            onChangeText={(answer) => setAnswerTwo(answer)}
          />,
          <Text style={styles.label}>{level_G_one_obj.header_three}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer three*"
            value={answerThree}
            onChangeText={(answer) => setAnswerThree(answer)}
          />,
          <Text style={styles.label}>{level_G_one_obj.header_four}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer four*"
            value={answerFour}
            onChangeText={(answer) => setAnswerFour(answer)}
          />,
          <Text style={styles.label}>{level_G_one_obj.header_five}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer five*"
            value={answerFive}
            onChangeText={(answer) => setAnswerFive(answer)}
          />,
        ];
      } else if (type == "P1") {
        sub_render = [
          <Text style={styles.title}>{level_P_one_obj.title}</Text>,
          <Text style={styles.info}>{level_P_one_obj.info}</Text>,
          <Text style={styles.label}>{level_P_one_obj.header_one}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer one*"
            value={answerOne}
            onChangeText={(answer) => setAnswerOne(answer)}
          />,
          <Text style={styles.label}>{level_P_one_obj.header_two}</Text>,
          <TextInput
            style={styles.input}
            placeholder="answer two*"
            value={answerTwo}
            onChangeText={(answer) => setAnswerTwo(answer)}
          />,
          <Text style={styles.label}>{level_P_one_obj.header_three}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer three*"
            value={answerThree}
            onChangeText={(answer) => setAnswerThree(answer)}
          />,
          <Text style={styles.label}>{level_P_one_obj.header_four}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer four*"
            value={answerFour}
            onChangeText={(answer) => setAnswerFour(answer)}
          />,
          <Text style={styles.label}>{level_P_one_obj.header_five}</Text>,
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer five*"
            value={answerFive}
            onChangeText={(answer) => setAnswerFive(answer)}
          />,
        ];
      }
    }
    render = sub_render;
  } else if (type == "1.1") {
    render = [
      <Text style={styles.title}>{level_one_one_obj.title}</Text>,
      <Text style={styles.label}>{level_one_one_obj.header_one}</Text>,
      <Text style={styles.info}>{level_one_one_obj.info_one}</Text>,
      <Text style={styles.label}>{level_one_one_obj.header_two}</Text>,
      <Text style={styles.info}>{level_one_one_obj.info_two}</Text>,
      <Text style={styles.label}>{level_one_one_obj.header_three}</Text>,
      <Text style={styles.info}>{level_one_one_obj.info_three}</Text>,
    ];
  } else if (type == "2.3") {
    render = [
      <Text style={styles.title}>{level_two_three_obj.title}</Text>,
      <Text style={styles.info}>{level_two_three_obj.info}</Text>,
      <Text style={styles.label}>{level_two_three_obj.header_one}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
      />,
      <Text style={styles.label}>{level_two_three_obj.header_two}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerTwo}
        onChangeText={(answer) => setAnswerTwo(answer)}
      />,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerThree}
        onChangeText={(answer) => setAnswerThree(answer)}
      />,
      <Text style={styles.label}>{level_two_three_obj.header_two}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerFour}
        onChangeText={(answer) => setAnswerFour(answer)}
      />,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerFive}
        onChangeText={(answer) => setAnswerFive(answer)}
      />,
      <Text style={styles.label}>{level_two_three_obj.header_two}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerSix}
        onChangeText={(answer) => setAnswerSix(answer)}
      />,
    ];
  } else if (type == "G2") {
    render = [
      <Text style={styles.title}>{level_G_two_obj.title}</Text>,
      <Text style={styles.info}>{level_G_two_obj.info}</Text>,
      <Text style={styles.label}>{level_G_two_obj.header_one}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
      />,
      <Text style={styles.label}>{level_G_two_obj.header_two}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerTwo}
        onChangeText={(answer) => setAnswerTwo(answer)}
      />,
      <Text style={styles.label}>{level_G_two_obj.header_one}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerThree}
        onChangeText={(answer) => setAnswerThree(answer)}
      />,
      <Text style={styles.label}>{level_G_two_obj.header_two}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerFour}
        onChangeText={(answer) => setAnswerFour(answer)}
      />,
      <Text style={styles.label}>{level_G_two_obj.header_one}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerFive}
        onChangeText={(answer) => setAnswerFive(answer)}
      />,
      <Text style={styles.label}>{level_G_two_obj.header_two}</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerSix}
        onChangeText={(answer) => setAnswerSix(answer)}
      />,
    ];
  } else {
    render = [
      <Text style={styles.title}>Questioniare</Text>,
      <Text style={styles.info}>
        This is a questionniare to help us get an understanding of level of
        knowledge you hold about our enviroment, plastic and generally the
        causes and effects of plastics to our enviroment
      </Text>,
      <Text style={styles.label}>I know what single-use plastic is:</Text>,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
      />,

      <Text style={styles.label}>
        Do you think you have a responsibility to help reduce single-use plastic
        waste?
      </Text>,
      <TextInput
        style={styles.input}
        placeholder="answer two*"
        value={answerTwo}
        onChangeText={(answer) => setAnswerTwo(answer)}
      />,

      <Text style={styles.label}>
        What types of single-use plastics do you use?
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer three*"
        value={answerThree}
        onChangeText={(answer) => setAnswerThree(answer)}
      />,

      <Text style={styles.label}>
        How do you normally deal with plastic waste at home?
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer four*"
        value={answerFour}
        onChangeText={(answer) => setAnswerFour(answer)}
      />,
      <Text style={styles.label}>
        My friends will think I am weird if I do not use single-use plastic?
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer five*"
        value={answerFive}
        onChangeText={(answer) => setAnswerFive(answer)}
      />,
      <Text style={styles.label}>
        Many people think disposable plastic items (single-use plastic) are
        good. What do you think?
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer six*"
        value={answerSix}
        onChangeText={(answer) => setAnswerSix(answer)}
      />,
      <Text style={styles.label}>
        Your friend eats his lunch in a container he takes from home. Do you
        think this is right?
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer seven*"
        value={answerSeven}
        onChangeText={(answer) => setAnswerSeven(answer)}
      />,
      <Text style={styles.label}>
        I prefer to drink my juice with a straw:
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer eight*"
        value={answerEight}
        onChangeText={(answer) => setAnswerEight(answer)}
      />,
      <Text style={styles.label}>
        I can change the way my family and friends use plastics in their
        everyday lives by talking to them about the negative impacts plastic is
        having.
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer nine*"
        value={answerNine}
        onChangeText={(answer) => setAnswerNine(answer)}
      />,
      <Text style={styles.label}>
        Can you easily find alternatives to plastic?
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer ten*"
        value={answerTen}
        onChangeText={(answer) => setAnswerTen(answer)}
      />,
      <Text style={styles.label}>
        Do you know of any plastic recyclers in your area?
      </Text>,
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textarea}
        placeholder="answer Eleven*"
        value={answerEleven}
        onChangeText={(answer) => setAnswerEleven(answer)}
      />,
    ];
  }
  //-----------------------end of conditional render--------------------------------------
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {render}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "75%",
    fontSize: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#a4eddf",
    padding: 10,
    margin: 5,
  },
  textarea: {
    width: "75%",
    fontSize: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#a4eddf",
    padding: 10,
    height: 150,
    maxWidth: 400,
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  label: {
    fontSize: 25,
    paddingLeft: 10,
    fontFamily: "HelveticaNeue-LightItalic",
    paddingVertical: 5,
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: "#47B6AD",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    margin: "2%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    justifyContent: "center",
    fontSize: 30,
    paddingLeft: 10,
    fontFamily: "Helvetica",
    paddingVertical: 20,
  },
  info: {
    justifyContent: "center",
    fontSize: 18,
    paddingLeft: 5,
    fontFamily: "Helvetica",
    paddingVertical: 5,
  },
});

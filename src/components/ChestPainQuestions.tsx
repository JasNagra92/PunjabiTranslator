import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Question from './Question';
interface Props {
  route?: {
    params: {language: string};
  };
}

const ChestPainQuestions: React.FC<Props> = ({route}) => {
  const {language} = route.params;
  return (
    <View style={style.container}>
      <ScrollView style={style.container}>
        <Question
          question="Are you having Chest Pain?"
          filename="test"
          phonetic="Sha-tee vich daa-rd hun-dah-ya"
          language={language}
          filetype="mp3"
        />
        <Question
          question="When did the pain start?"
          filename="q4cp"
          phonetic="daa-rd shu-ru ku-dho ho-iya"
          language={language}
          filetype="mp3"
        />
        <Question
          question="Are you also Short of Breath?"
          filename="q5cp"
          phonetic="(saah vee thu-wa-noo char-dah)"
          language={language}
          filetype="mp3"
        />
        <Question
          question="Is the pain worse when you take a deep breath?"
          filename="q6cp"
          phonetic="lum-bah saah leh-kay daa-rd budth-daah-ya"
          language={language}
          filetype="mp3"
        />
        <Question
          question="Are you Nauseated?"
          filename="q2cp"
          phonetic="twan-nuu alt-tee awn-nu jee kard-dah-ya"
          language={language}
          filetype="mp3"
        />
        <Question
          question="Does the pain radiate to your back?"
          filename="q3cp"
          phonetic="daa-rd too-hee vich vee jand-dah-ya"
          language={language}
          filetype="mp3"
        />
        <Question
          question="Are you Dizzy?"
          filename="q7cp"
          phonetic="twan-nuu Chak-rr awn-dah-ya"
          language={language}
          filetype="mp3"
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {height: 1600, flex: 1},
});

export default ChestPainQuestions;

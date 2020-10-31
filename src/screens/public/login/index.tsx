import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Text from '@components/text';
import styles from './styles';
import MyStatusBar from '@components/statusbar';
import { StackScreenProps } from '@react-navigation/stack';

const Index: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar />
      <View style={styles.titleWrapper}>
        <Text size={22} type="bold" color="white">
          Hukum Ekonomi Syariah (HES)
        </Text>
        <Text size={20} color="white">
          Universitas Islam Negeri Jakarta
        </Text>
        <Text size={18} color="white" style={styles.startLogin}>
          Login untuk Memulai
        </Text>
      </View>
      <View style={styles.loginWrapper}>
        <TextInput label="Email" style={styles.input} mode="outlined" />

        <TextInput label="Password" secureTextEntry={true} mode="outlined" style={styles.input} />
        <Button
          style={styles.btnMargin}
          mode="contained"
          onPress={() => navigation.replace('BottomTab' as any)}
        >
          Masuk
        </Button>
        <Button style={styles.btnMargin} onPress={() => navigation.navigate('Register')}>
          Belum punya akun ? Daftar disini
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Index;

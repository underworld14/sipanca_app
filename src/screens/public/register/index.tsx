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
        <Text size={24} type="semibold" color="white">
          Hukum Ekonomi Syariah (HES)
        </Text>
        <Text size={20} color="white">
          Universitas Islam Negeri Jakarta
        </Text>
        <Text size={18} color="white" style={styles.startLogin}>
          Daftarkan diri anda terlebih dahulu
        </Text>
      </View>
      <View style={styles.loginWrapper}>
        <TextInput
          label="NIK"
          style={styles.input}
          mode="outlined"
          placeholder="Masukkan NIK Mahasiswa"
        />
        <TextInput
          label="Nama Lengkap"
          style={styles.input}
          mode="outlined"
          placeholder="Masukkan Nama Lengkap"
        />
        <TextInput
          label="Email"
          style={styles.input}
          mode="outlined"
          placeholder="Masukkan Alamat Email Mu"
        />

        <TextInput
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          style={styles.input}
          placeholder="Masukkan Password untuk akunmu"
        />
        <Button style={styles.btnMargin} mode="contained">
          Daftar Sekarang
        </Button>
        <Button onPress={() => navigation.navigate('Login')} style={styles.btnMargin}>
          Sudah Punya akun ? Login Disini
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Index;

import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Text from '@components/text';
import { images } from '@assets/index';
import MyStatusbar from '@components/statusbar';
import styles from './styles';
import BoxMenu from './boxmenu';

const Index = () => {
  const [selected, setSelected] = React.useState('pcr');
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusbar />
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Sipanca APP" subtitle="Monitoring Application" />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.headerPicker}>
          <View style={styles.pickerTag}>
            <Text size={18} type="semibold">
              Pilih Lokasi :
            </Text>
          </View>
          <View style={styles.pickerWraper}>
            <Picker
              selectedValue={selected}
              style={styles.pickerStyle}
              onValueChange={(itemValue) => setSelected(itemValue as string)}>
              <Picker.Item label="PCR" value="pcr" />
              <Picker.Item label="Unilak" value="unilak" />
            </Picker>
          </View>
        </View>
        <View style={styles.listMenu}>
          <View style={styles.listMenuBox}>
            <Image source={images.pm} style={styles.iconSize} />
            <Text size={16}>Kualitas Udara</Text>
          </View>
          <View style={styles.listMenuBox}>
            <Text type="bold" size={26}>
              Baik
            </Text>
            <Text size={20}>24 ug/m3</Text>
          </View>
        </View>
        <View style={styles.listMenu}>
          <BoxMenu image={images.intensitascahaya} title="Intensitas cahaya" value="66 lx" />
          <BoxMenu image={images.curahhujan} title="Curah Hujan" value="0 mm" />
        </View>
        <View style={styles.listMenu}>
          <BoxMenu image={images.temperature} title="Suhu" value="25 C" />
          <BoxMenu image={images.humidity} title="Kelembapan" value="75 %" />
        </View>
        <View style={styles.listMenu}>
          <BoxMenu image={images.arahangin} title="Arah Angin" value="U" />
          <BoxMenu image={images.kecepatanangin} title="Kecepatan Angin" value="0.3 m/sev" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;

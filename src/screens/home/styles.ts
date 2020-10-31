import { StyleSheet } from 'react-native';
import { hp } from '@components/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  headerPicker: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdc3c7',
  },
  pickerWraper: {
    flex: 1,
    justifyContent: 'center',
  },
  pickerStyle: {
    height: 50,
  },
  pickerTag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBar: {
    height: hp(10),
  },
  listMenu: {
    flex: 1,
    flexDirection: 'row',
  },
  listMenuBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSize: {
    width: '50%',
    height: '50%',
    margin: 5,
  },
});

export default styles;

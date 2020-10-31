import { StyleSheet } from 'react-native';
import { hp, wp } from '@components/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleWrapper: {
    flex: 0.6,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    backgroundColor: '#e67e22',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  startLogin: {
    marginTop: hp(3),
  },
  loginWrapper: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
  },
  input: {
    marginBottom: hp(2),
  },
  btnMargin: {
    marginTop: hp(2),
  },
});

export default styles;

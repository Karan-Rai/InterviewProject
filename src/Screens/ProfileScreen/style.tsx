import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: COLORS.primaryColor,
  },
  welcome: {
    fontSize: 20,
    color: COLORS.plain,
    paddingVertical: 10,
  },
  body: {
    flex: 2,
    backgroundColor: COLORS.plain,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  dropdown: {
    marginHorizontal: 50,
  },
  action: {
    flexDirection: 'row',

    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: COLORS.plain,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: COLORS.plain,
  },
  date: {
    width: 280,
  },
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    marginLeft: 36,
  },
  imageButton: {
    borderColor: COLORS.black,
    borderWidth: 1,
    width: 140,
    height: 140,
    borderRadius: 100,
  },
});

export default styles;

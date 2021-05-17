import {StyleSheet} from 'react-native';
import {COLORS} from '../Utils/colors';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: COLORS.plain,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 20,
    color: COLORS.plain,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: COLORS.buttonColor,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

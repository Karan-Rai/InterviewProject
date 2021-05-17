import React from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import DatePicker from 'react-native-datepicker';
import styles from './style';
import Input from '../Component/TextInput';
import Button from '../Component/Button';
import {TEXT} from '../Utils/String';
import {img} from '../Assets/icons';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      date: '',
      photo: '',
      check: false,
    };
  }

  selectFile = () => {
    var options = {
      title: TEXT.select,
      customButtons: [
        {
          name: TEXT.key,
          title: TEXT.imageTitle,
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      if (res.didCancel) {
        Alert.alert(TEXT.alertImage);
      } else {
        let source = res;
        this.setState({
          photo: source,
        });
      }
    });
  };
  onSubmit = () => {
    if (
      this.state.fname == '' ||
      this.state.lname == '' ||
      this.state.date == ''
    ) {
      Alert.alert(TEXT.alertSubmit);
    } else {
      let details = {};
      (details.fname = this.state.fname),
        (details.lname = this.state.lname),
        (details.photo = this.state.photo),
        (details.date = this.state.date),
        fetch('http://localhost:8090/profile/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(details),
        })
          .then(response => response.json())

          .catch(error => {
            const msg = this.fetchErrorMessage(error);
            Alert.alert(msg);
          });
    }
  };

  fetchErrorMessage(error) {
    if (
      (error.response && error.response.status === TEXT.HTTP_ERROR_CODE) ||
      (error.response && error.response.status === TEXT.SERVER_NOT_FOUND)
    ) {
      return TEXT.REQ_FAILED;
    } else if (
      error.response &&
      error.response.status === TEXT.UNAUTHORIZED_ACCESS_CODE
    ) {
      return TEXT.UNAUTHORIZED_ACCESS_FOUND;
    }
    return error.response && error.response.data
      ? error.response.data.error_description
      : TEXT.NETWORK_ERROR;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={this.selectFile}>
            <Image
              source={
                this.state.photo
                  ? {uri: this.state.photo.uri}
                  : img.PROFILE_ICON
              }
              style={styles.imageBox}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>{TEXT.welcome}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.action}>
            <Input
              placeholder={TEXT.fname}
              onChangeText={text => {
                this.setState({fname: text}, () => {});
              }}
            />
          </View>

          <View style={styles.action}>
            <Input
              placeholder={TEXT.lname}
              onChangeText={text => {
                this.setState({lname: text}, () => {});
              }}
            />
          </View>

          <View style={styles.action}>
            <DatePicker
              style={styles.date}
              date={this.state.date}
              mode="date"
              placeholder={TEXT.datePlaceholder}
              format="DD-MM-YYYY"
              maxDate={new Date()}
              confirmBtnText={TEXT.confirm}
              cancelBtnText={TEXT.cancel}
              onDateChange={date => {
                this.setState({date: date});
              }}
            />
          </View>

          <Button onPress={this.onSubmit} title={TEXT.submit} />
        </View>
      </View>
    );
  }
}

export default Profile;

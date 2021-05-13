import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import DatePicker from 'react-native-datepicker';
import styles from './style';
import Input from '../Component/TextInput';
import Button from '../Component/Button';
import {TEXT} from '../Component/String';
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
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorMessage) {
        console.log('ImagePicker Error: ', res.errorMessage);
      } else {
        let source = res;
        this.setState({
          photo: source,
        });
      }
    });
  };
  onSubmit = () => {
    let details = {};
    (details.fname = this.state.fname),
      (details.lname = this.state.lname),
      (details.photo = this.state.photo),
      (details.date = this.state.date),
      console.log(details);

    fetch('http://localhost:8090/profile/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })
      .then(response => response.json())
      .then(details => {
        console.log('Success:', details);
      })
      .catch(error => {
        const msg = this.fetchErrorMessage(error);
      });
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
            {this.state.photo === null ? (
              <Image
                source={require('/Users/karry/ProfilePage/src/Component/profile.jpg')}
                style={styles.imageBox}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={{uri: this.state.photo.uri}}
                style={styles.imageBox}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <Text style={styles.welcome}>{TEXT.welcome}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.action}>
            <Input
              placeholder={TEXT.fname}
              onChangeText={fname => {
                this.setState({fname: fname}, () => {});
              }}
            />
          </View>

          <View style={styles.action}>
            <Input
              placeholder={TEXT.lname}
              onChangeText={lname => {
                this.setState({lname: lname}, () => {});
              }}
            />
          </View>

          <View style={styles.action}>
            <DatePicker
              style={{width: 280}}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="1990-01-01"
              maxDate="2000-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={date => {
                this.setState({date: date});
              }}
            />
          </View>

          <Button
            disabled={
              (this.state.fname && this.state.lname && this.state.dob) == ''
                ? true
                : false
            }
            onPress={this.onSubmit}
            title="Submit"
          />
        </View>
      </View>
    );
  }
}

export default Profile;

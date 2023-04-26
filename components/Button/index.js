import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const Button = ({
  title,
  isOutlined = false,
  onPress,
  disabled = false,
  buttonType = 'secondary',
  style,
  titleStyle,
}) => {
  useEffect(() => {}, []);
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          buttonType === 'primary' && isOutlined === true
            ? styles.PrimayOutlinedButton
            : buttonType === 'secondary' && isOutlined === true
            ? styles.SecondaryOutlinedButton
            : buttonType === 'primary' && isOutlined === false
            ? disabled
              ? {...styles.PrimaryAppButton, opacity: 0.3}
              : styles.PrimaryAppButton
            : disabled
            ? {...styles.SecondaryAppButton, opacity: 0.7}
            : styles.SecondaryAppButton,
          style,
        ]}>
        <Text
          style={[
            buttonType === 'primary' && isOutlined === true
              ? styles.PrimayOutlinedButtonTitle
              : buttonType === 'secondary' && isOutlined === true
              ? styles.SecondaryOutlinedButtonTitle
              : buttonType === 'primary' && isOutlined === false
              ? styles.PrimaryAppButtonTitle
              : styles.SecondaryAppButtonTitle,
            titleStyle,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

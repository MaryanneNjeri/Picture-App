import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  base: {
    backgroundColor: '#dfdfdf',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  facebook: {
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 50,
      color: '#ffffff',
      backgroundColor: '#006bb3',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },
    icon: {

      position: 'absolute',

    },
  },
  twitter: {
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 50,
      color: '#ffffff',
      backgroundColor: '#cc2900',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },
    icon: {
      position: 'absolute',

    },
  },
  googleButton: {
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 50,
      color: '#ffffff',
      backgroundColor: '#cc2900',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },
    icon: {
      position: 'absolute',

    },
  },

  secondary: {
    button: {
      backgroundColor: 'white',
      width: 120,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#1883CB',
    },
    text: {
      color: '#1883CB',
      fontWeight: '200',
    },

  },
  danger: {
    button: {
      width: 100,
      backgroundColor: 'red',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },

  },
  success: {
    button: {
      width: width / 2.4,
      backgroundColor: '#9ACD32',
      // borderWidth: 2,
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
      // borderColor: '#9ACD32',
      borderRadius: 30,

    },
    text: {
      color: 'white',
      fontWeight: '200',
    },
  },
  account: {
    button: {
      width: width / 2.2,
      backgroundColor: '#008ae6',
      // borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      // borderColor: '#ff794d',
      borderRadius: 30,
      padding: 10,
    },
    text: {
      color: 'white',
      fontWeight: '200',
    },
  },
  logout: {
    button: {
      width: width / 2.5,
      backgroundColor: '#ff4d4d',
      // borderWidth: 2,
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
      // borderColor: '#ff4d4d',
      borderRadius: 30,
    },
    text: {
      color: 'white',
      fontWeight: '200',
    },
  },


  signUp: {
    button: {
      textAlign: 'center',
      width: width - 100,
      backgroundColor: '#008ae6',
      color: 'white',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },
  },
  bottom: {
    button: {
      backgroundColor: 'white',
      width: width - 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#1883CB',
    },
    text: {
      color: '#1883CB',
      fontWeight: '200',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'white',
      width: width - 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#D9E3E8',
    },
    text: {
      color: '#D9E3E8',

    },
  },

  medium: {
    button: {
      textAlign: 'center',
      width: 140,
      backgroundColor: '#0052cc',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },


  },
  withBorder: {
    button: {
      borderRadius: 30,
      width: 120,
      backgroundColor: '#0052cc',
      color: 'white',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },

  },


};

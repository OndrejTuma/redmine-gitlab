import getModel from './getModel'
import { Schema } from 'mongoose'

const UserModel = getModel('user', new Schema({
  name: {
    type: String,
    required: [true, 'Username is required'],
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
}))

export default UserModel
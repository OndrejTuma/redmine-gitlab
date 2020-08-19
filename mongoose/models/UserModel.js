import getModel from '../getModel'
import { Schema } from 'mongoose'

const UserModel = getModel('user', new Schema({
  name: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Uživatelské jméno je již obsazené'],
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  redmineToken: {
    type: String,
    required: [true, 'Redmine access token is required']
  },
  gitlabToken: {
    type: String,
    required: [true, 'Gitlab access token is required']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}))

export default UserModel
import {model, models} from 'mongoose'

export default function (name) {
  if (models.hasOwnProperty(name)) {
    return models[name]
  }

  return model.call(...arguments)
}
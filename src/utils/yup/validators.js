import { inflectString } from '@/utils/strings'

export const getCharCountMessage = count => `${count} ${inflectString(count, ['znak', 'znaky', 'znaků'])}`

export const isRequired = type => (message = 'Pole je povinné') => type.required(message)
export const isMax = type => (length, message = ({max}) => `Maximální povolený počet je ${getCharCountMessage(max)}`) => type.max(length, message)
export const isMin = type => (length, message = ({min}) => `Minimální počet je ${getCharCountMessage(min)}`) => type.min(length, message)
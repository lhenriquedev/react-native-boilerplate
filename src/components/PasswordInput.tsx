import { useState } from 'react'

import { Icon } from './Icon'
import { TextInput, TextInputProps } from './TextInput'

type PasswordInput = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput(props: PasswordInput) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev)
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  )
}

import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Screen } from '../components/Screen'
import { TextInput } from '../components/TextInput'

export function SignInScreen() {
  return (
    <Screen flex={1}>
      <TextInput
        boxProps={{ marginBottom: 's20' }}
        label="Email"
        placeholder="Digite seu email"
        errorMessage="Email inválido"
      />

      <TextInput
        boxProps={{ marginBottom: 's20' }}
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
      />

      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  )
}

import { Button } from '../components/Button'
import { PasswordInput } from '../components/PasswordInput'
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
        secureTextEntry
        label="Senha"
        placeholder="Digite sua senha"
      />

      <PasswordInput label="Nova senha" placeholder="Digite sua nova senha" />

      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  )
}

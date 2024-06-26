import { useNavigation } from '@react-navigation/native'
import React from 'react'

// import { Icon } from '../../Icon/Icon'
import { Box, BoxProps, TouchableOpacityBox } from '../components/Box'

import { ScreenProps } from './Screen'
import { Text } from './Text'

const ICON_SIZE = 20
type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'> &
  BoxProps
export function ScreenHeader({
  canGoBack,
  title,
  HeaderComponent,
  ...boxProps
}: Props) {
  const navigation = useNavigation()

  if (!title && !canGoBack && !HeaderComponent) {
    return null
  }

  const showBackLabel = !title && !HeaderComponent

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between"
      {...boxProps}
    >
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          flexDirection="row"
          alignItems="center"
          mr={showBackLabel ? 's10' : undefined}
          onPress={navigation.goBack}
        >
          {/* <Icon size={ICON_SIZE} name="arrowLeft" color="primary" /> */}
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}

      {HeaderComponent}

      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="carrotSecondary" width={ICON_SIZE} />}
    </Box>
  )
}

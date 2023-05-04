import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Container, UserHeader } from './styles'

export default function Schedule() {
  return (
    <Container>
      <UserHeader>
        <Avatar src="htpps://github.com/antonioRenato.png" />
        <Heading>Antonio Renato</Heading>
        <Text>Desenvolvedor FullStack Senior</Text>
      </UserHeader>
    </Container>
  )
}

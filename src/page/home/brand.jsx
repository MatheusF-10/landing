import './home.css'
import { ContainerLogo } from './container-logo'
import { Logo } from './logo'
import { BrandName } from './brand-name'
export function Brand() {
  return (
    <ContainerLogo href="/">
      <Logo src="src/assets/logo.png" alt="Logo da empresa" />
      <BrandName>RM Freelances</BrandName>
    </ContainerLogo>
  )
}
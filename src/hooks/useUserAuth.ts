import { useAppSelector } from '@hooks/useRedux'

export const useUserAuth = () => {
  const user = useAppSelector((state) => state.auth.user)

  if (!user) throw Error('Nenhum usuário logado')

  return user
}

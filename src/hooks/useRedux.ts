import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import store, { AppDispatch, RootState } from '../redux/store'

export const useStore: () => () => RootState = () => store.getState
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type { RootState }

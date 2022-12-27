import { FormTextFieldProps } from 'plc-shared/components/FormElement/FormTextField'
import { CustomIconButton } from 'plc-shared/components/input'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FormTextField } from 'plc-shared/components/FormElement'
import { FieldValues } from 'react-hook-form'
import { useState } from 'react'
import { BaseTextFieldProps } from '@mui/material'

export const FormTextPassword = <T extends FieldValues>(props: FormTextFieldProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const onClickShowPassword = () => {
    setIsShowPassword((prevState) => !prevState)
  }

  const icon = isShowPassword ? FaEyeSlash : FaEye

  const type: BaseTextFieldProps['type'] = isShowPassword ? 'text' : 'password'

  return (
    <FormTextField
      {...props}
      type={type}
      endIcon={
        <CustomIconButton
          id={`${props.id}-icon-button`}
          icon={icon}
          onClick={onClickShowPassword}
        />
      }
    />
  )
}

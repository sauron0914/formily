import React from 'react'
import { useForm } from '../hooks'
import { MutableField } from './MutableField'

export const VirtualField = <D extends React.FC, C extends React.FC>(
  props: React.PropsWithChildren<Formily.ICreateFieldProps<D, C>>
) => {
  const form = useForm()
  const field = form.createField({ ...props, void: true })
  return <MutableField field={field}>{props.children}</MutableField>
}

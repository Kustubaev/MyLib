import { Listbox, ListboxItem, Input as NInput } from "@nextui-org/react"
import { FC, useEffect, useMemo, useState } from "react"
import { Control, useController, useWatch } from "react-hook-form"
import cls from "./InputSelect.module.scss"

interface Option {
  value: any
  name: string
}

interface InputProps {
  loading?: boolean
  control?: Control<any>
  label: string
  name: string
  type?: string
  required?: string
  options?: Option[] | undefined
  messageNotFound?: string

  placeholder?: string
  variantInput?: "flat" | "bordered" | "faded" | "underlined"
  variantListbox?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow"
}

export const InputSelect: FC<InputProps> = (props) => {
  const {
    loading,
    control,
    label,
    name,
    type = "string",
    required,
    options,

    placeholder,
    variantInput = "bordered",
    variantListbox = "bordered",
    messageNotFound = "Не найдено!",
  } = props

  const [valueInput, setValueInput] = useState("")
  const [optionsSelect, setOptionsSelect] = useState(options)
  const [onInput, setOnInput] = useState(false)

  const findMatchingString = ([...item]: Option[], element: string) => {
    if (!element) return item
    return (
      item &&
      item.filter((item) =>
        item?.name?.toLowerCase()?.includes(element?.toLowerCase()),
      )
    )
  }

  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]))
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  )
  useEffect(() => {
    field?.onChange(selectedValue)
  }, [selectedValue])

  useEffect(() => {
    setOptionsSelect(findMatchingString(options ?? [], valueInput))
  }, [valueInput])

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}`,
    control,
    rules: { required },
  })

  const results = useWatch({ control, name: name })

  const onChangeSelect = (e: any) => {
    setSelectedKeys(e)
    setOptionsSelect([])
  }

  const onFocusInput = (e: any) => {
    setValueInput("")
    setOnInput(true)
  }

  const onBlurInput = (e: any) => {
    setValueInput("")
    setOnInput(false)
  }

  useEffect(() => {
    options && setValueInput(options?.[results]?.name)
  }, [results])

  return (
    <>
      <NInput
        isDisabled={loading}
        value={valueInput}
        id={name}
        label={label}
        type={type}
        variant={variantInput}
        placeholder={placeholder}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        errorMessage={`${errors[name]?.message ?? ""}`}
        isInvalid={invalid}
        onChange={(e) => setValueInput(e.target.value)}
      />

      {onInput ? (
        <div className={cls.container}>
          {optionsSelect?.length ? (
            <Listbox
              aria-label="Multiple selection example"
              variant="faded"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={onChangeSelect}
              className={cls.Listbox}
            >
              {optionsSelect?.map((item) => (
                <ListboxItem
                  key={item.value}
                  variant={variantListbox}
                  className={cls.ListboxItem}
                >
                  {item.name}
                </ListboxItem>
              ))}
            </Listbox>
          ) : (
            <div className={cls.message}>{messageNotFound}</div>
          )}
        </div>
      ) : null}
    </>
  )
}

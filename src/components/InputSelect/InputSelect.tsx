import { Listbox, ListboxItem, Input as NextInput } from "@nextui-org/react"
import { FC, useEffect, useMemo, useState } from "react"
import { Control, useController, useWatch } from "react-hook-form"

interface Option {
  value: any
  name: string
}

interface InputProps {
  control?: Control<any>
  label: string
  name: string
  type?: string
  required?: string
  options?: Option[] | undefined

  placeholder?: string
  variant?: "flat" | "bordered" | "faded" | "underlined"
}

export const InputSelect: FC<InputProps> = (props) => {
  const {
    control,
    label,
    name,
    type = "string",
    required,
    options,

    placeholder,
    variant = "bordered",
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

  useEffect(() => {
    options && setValueInput(options?.[results]?.name)
  }, [results])

  return (
    <>
      <NextInput
        value={valueInput}
        id={name}
        label={label}
        type={type}
        variant={variant}
        placeholder={placeholder}
        errorMessage={`${errors[name]?.message ?? ""}`}
        onChange={(e) => setValueInput(e.target.value)}
        onFocus={onFocusInput}
        onBlur={() => setOnInput(false)}
      />

      {valueInput && onInput ? (
        optionsSelect?.length ? (
          <Listbox
            aria-label="Multiple selection example"
            variant="faded"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={onChangeSelect}
            name={field?.name}
          >
            {optionsSelect?.map((item) => (
              <ListboxItem key={item.value} variant={variant}>
                {item.name}
              </ListboxItem>
            ))}
          </Listbox>
        ) : (
          <div>Таких книг нет!</div>
        )
      ) : null}
    </>
  )
}

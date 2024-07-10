import { Listbox, ListboxItem, Input as NextInput } from "@nextui-org/react"
import { FC, useEffect, useMemo, useState } from "react"
import { Control, useController } from "react-hook-form"

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

  const findMatchingString = (item: Option[], element: string) => {
    if (!element) return item
    return item && [...item].filter((item) => item.name.includes(element))
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

  return (
    <>
      <NextInput
        id={name}
        label={label}
        type={type}
        variant={variant}
        placeholder={placeholder}
        errorMessage={`${errors[name]?.message ?? ""}`}
        onChange={(e) => setValueInput(e.target.value)}
      />

      {valueInput ? (
        optionsSelect?.length ? (
          <Listbox
            aria-label="Multiple selection example"
            variant="faded"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            value={field?.value}
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

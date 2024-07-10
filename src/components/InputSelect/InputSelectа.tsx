import {
  Input as NextInput,
  Select,
  SelectItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react"
import { ChangeEvent, FC, useEffect, useMemo, useState } from "react"
import { Control, useController } from "react-hook-form"
import { Button } from "../Button/Button"
import { BooksMock } from "../../data/Books"

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
    return item && [...item].filter((item) => item.value.includes(element))
  }

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value)
    console.log(options)

    setOptionsSelect(findMatchingString(options ?? [], valueInput))
  }

  // useEffect(() => {
  //   optionsSelect
  // }, [selectedValue])

  const [isOpen, setIsOpen] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]))
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys],
  )
  useEffect(() => {
    field?.onChange(selectedValue)
  }, [selectedValue])

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
        onChange={changeInput}
        onFocus={() => setIsOpen(true)}
      />

      <div>
        <Listbox
          aria-label="Multiple selection example"
          variant="faded"
          disallowEmptySelection
          selectionMode="single"
          // onSelectionChange={field?.onChange}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          value={field?.value}
          name={field?.name}
          // onChange={}
          onBlur={field?.onBlur}
        >
          {optionsSelect?.map((item) => (
            <ListboxItem key={item.value} variant={variant}>
              {item.name}
            </ListboxItem>
          ))}
        </Listbox>
      </div>

      <Button
        aria-label="Open"
        aria-pressed={isOpen}
        onPress={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </Button>
    </>
  )
}

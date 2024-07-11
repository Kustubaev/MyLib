import { ChangeEvent, FC, useEffect, useState } from "react"
import { Control, useController } from "react-hook-form"
import cls from "./AddFile.module.scss"

interface AddFileProps {
  onImageSelect?: (file: File | null) => void
  name?: string
  required?: string
  loading?: boolean
  control?: Control<any>
}

export const AddFile: FC<AddFileProps> = (props) => {
  const { loading, name, required = "", control } = props
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  useEffect(() => {
    if (selectedImage && !loading) {
      setSelectedImage(null)
    }
  }, [loading])

  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}`,
    control,
    rules: { required },
  })

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files && files.length > 0) {
      setSelectedImage(files[0])
      field.onChange(files?.[0]?.name)
    } else {
      setSelectedImage(null)
    }
  }

  const classNameLabel = `${cls.label} ${loading ? cls.label__onBlur : null}`

  return (
    <div className="custom-image-uploader">
      <input
        className={cls.input}
        disabled={loading}
        type="file"
        id="imageUploader"
        accept="image/*"
        onChange={handleImageChange}
      />
      <label htmlFor="imageUploader" className={classNameLabel}>
        {selectedImage
          ? "Выбранное изображение: " + selectedImage.name
          : "Добавить изображение:"}
      </label>
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="" />}
    </div>
  )
}

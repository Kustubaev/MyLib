import React, { FC } from "react"
import cls from "./Image.module.scss"

export enum CategoryVariantsImg {
  BIG__IMAGE = "BigImage",
  MEDIUM__IMAGE = "MediumImage",
  SMALL__IMAGE = "SmallImage",
}

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  path?: string
  alt?: string
  category?: CategoryVariantsImg
}

export const Image: FC<ImageProps> = (props) => {
  const pathDefImg = "./src/img/default.jpg"
  const {
    path = pathDefImg,
    category = CategoryVariantsImg.MEDIUM__IMAGE,
    alt,
    ...otherProps
  } = props
  const getImageAlt = (imagePath: string) => {
    const pathArray = imagePath.split("/")
    const filename = pathArray[pathArray.length - 1]
    const alt = filename.split(".")[0]
    return alt
  }
  return (
    <div className={cls.Wrapper}>
      <img
        src={path}
        onError={({ currentTarget }) => {
          currentTarget.onerror = undefined || null
          currentTarget.src = pathDefImg
        }}
        alt={alt && getImageAlt(path)}
        className={cls.Image}
        {...otherProps}
      />
    </div>
  )
}

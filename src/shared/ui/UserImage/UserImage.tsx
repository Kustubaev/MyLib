import React, { FC } from 'react';

import cls from './UserImage.module.scss';
import { pathDefImg } from 'src/shared/config/pathDefImg/pathDefImg';
import { classNames } from 'src/shared/lib/classNames/classNames';

export enum CategoryVariantsImg {
  BIG__IMAGE = 'BigImage',
  MEDIUM__IMAGE = 'MediumImage',
  SMALL__IMAGE = 'SmallImage'
}

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  imageUrl?: string;
  altText?: string;
  category?: CategoryVariantsImg;
}

export const UserImage: FC<ImageProps> = (props) => {
  const {
    imageUrl = pathDefImg,
    category = CategoryVariantsImg.MEDIUM__IMAGE,
    altText,
    ...otherProps
  } = props;
  const getImageAlt = (imagePath: string) => {
    const pathArray = imagePath.split('/');
    const filename = pathArray[pathArray.length - 1];
    const altText = filename.split('.')[0];
    return altText;
  };
  return (
    <div className={classNames(cls.Wrapper, {}, [cls[category]])}>
      <img
        src={imageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = undefined || null;
          currentTarget.src = pathDefImg;
        }}
        alt={altText && getImageAlt(imageUrl)}
        className={classNames(cls.Image, {}, [])}
        {...otherProps}
      />
    </div>
  );
};

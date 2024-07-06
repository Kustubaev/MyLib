import React, { FC } from "react"

type Props = {
  children: React.ReactElement[] | React.ReactElement
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="">{children}</div>
}

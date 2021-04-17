import React, {FC} from "react"

type ComponentProps = {
    name: string
}

const Component: FC<ComponentProps> = ({name = "⚛ react library starter"}) => {
    return <p>{name}</p>
}

export default Component

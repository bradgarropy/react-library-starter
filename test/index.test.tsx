import * as React from "react"
import * as ReactDOM from "react-dom"

import Component from "../src"

test("renders", () => {
    const div = document.createElement("div")

    ReactDOM.render(<Component name="Brad Garropy" />, div)
    ReactDOM.unmountComponentAtNode(div)
})

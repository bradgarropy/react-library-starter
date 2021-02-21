import * as React from "react"
import * as ReactDOM from "react-dom"

import Component from "../src"

describe("it does something", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(<Component />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})

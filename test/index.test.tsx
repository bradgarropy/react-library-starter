import {render} from "@testing-library/react"
import React from "react"

import Component from "../src"

test("renders", () => {
    render(<Component name="Brad Garropy" />)
})

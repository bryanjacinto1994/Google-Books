import React from "react"
import { PromiseProvider } from "mongoose"

function Form() {
    return (
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Another label</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
            <button type="submit"  onClick{(i) => PromiseProvider.han}
                </input>
            </div>
        </form>
    )
}

export default Form
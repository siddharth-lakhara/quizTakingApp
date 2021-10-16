const users = require("./users")
// @ponicode
describe("users", () => {
    test("0", () => {
        let callFunction = () => {
            users({ define: () => true }, { STRING: "foo bar", INTEGER: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            users({ define: () => false }, { STRING: "This is a String1", INTEGER: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            users({ define: () => true }, { STRING: "This is a String1", INTEGER: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            users({ define: () => true }, { STRING: "\"#'{7855663]}ééàà", INTEGER: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            users({ define: () => false }, { STRING: "\"#'{7855663]}ééàà", INTEGER: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            users(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

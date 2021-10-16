const rewire = require("rewire")
const Animations = rewire("./Animations")
const capitalize = Animations.__get__("capitalize")
const MyPage = Animations.__get__("MyPage")
// @ponicode
describe("capitalize", () => {
    test("0", () => {
        let callFunction = () => {
            capitalize("<?xml version=\"1.0\" ?>\n<a b=\"c\"/>\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            capitalize("<?xml version=\"1.0\" ?><a b=\"c\"/>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            capitalize(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Jean-Philippe", "Michael"], ["Pierre Edouard", "Anas", "Anas"], ["George", "Jean-Philippe", "Pierre Edouard"]]
        inst = new MyPage(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Michael", "Pierre Edouard"], ["George", "Jean-Philippe", "Anas"], ["George", "Anas", "Anas"]]
        inst = new MyPage(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import chai from "chai"

Enzyme.configure({ adapter: new Adapter() })

// You can list more individual test files here:
require("app_test")
require("checkplayerwin_test")
require("header_test")
require("actions_test")
require("gamefield_test")
require("reducers_test")

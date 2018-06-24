import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import chai from "chai"

Enzyme.configure({ adapter: new Adapter() })

// You can list more individual test files here:
require("state/tests/reducers-test")
require("state/tests/actions-test")
require("components/tests/app-test")
require("components/tests/counter-test")
require("components/tests/root-test")
require("./integration/game-integration-test")

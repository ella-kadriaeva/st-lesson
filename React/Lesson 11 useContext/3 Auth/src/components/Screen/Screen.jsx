import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";

const Screen = () => {
    const { user } = useContext(UserContext)

    return user ? <Dashboard /> : <Login />
}

export default Screen;
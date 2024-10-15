import { createStackNavigator }  from "@react-navigation/stack";

import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';
import ForgotPasswordScreen from "@/screens/ForgotPassword";
import Landing from "@/screens/Landing";
import LoginUpg from "@/screens/LoginUpg";
import OtpVerify from "@/screens/OtpVerify";
import PayNow from "@/screens/PayNow";
import PlanDetails from "@/screens/PlanDetails";
import ProfileDetails from "@/screens/ProfileDetails";
import ProfileScreen from "@/screens/ProfileScreen";
import ResetPass from "@/screens/ResetPass";
import UserCreated from "@/screens/UserCreated";
import Home from "@/screens/index";

const screens ={
    CreateAccount:{screen:CreateAccount},
    ForgotPasswordScreen:{screen:ForgotPasswordScreen},
    Landing:{screen:Landing},
    Login:{screen:Login},
    LoginUpg:{screen:LoginUpg},
    OtpVerify:{screen:OtpVerify},
    PayNow:{screen:PayNow},
    PlanDetails:{screen:PlanDetails},
    ProfileDetails:{screen:ProfileDetails},
    ProfileScreen:{screen:ProfileScreen},
    ResetPass:{screen:ResetPass},
    UserCreated:{screen:UserCreated},
    //Home:{screen:index}

}

//const MainStack =  createStackNavigator(screens);

//export default App(MainStack);
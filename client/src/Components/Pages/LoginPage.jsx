import Login from '../LoginForm/Login';
import react from 'react';
import { UserContext } from '../../UserContext';

const LoginPage = (props)=>{
    
    return(
        <react.Fragment>
            <UserContext.Provider value={props.data}>
                  <Login data={props.data}/>
            </UserContext.Provider>
          
        </react.Fragment>
    );
};
export default LoginPage;
import { HashRouter, Route ,Switch} from 'react-router-dom';

import SlideScreen from './page/slideScreen/index'
export default ()=>{
    return (
        <HashRouter>
            <Switch>
                <Route path='/slicescreen' exact component={SlideScreen}></Route>
            </Switch>
        
        </HashRouter>
    )
}
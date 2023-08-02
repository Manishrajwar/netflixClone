import { Routes , Route} from 'react-router-dom';
import Plan from './Pages/Plan';
import PlanForm from './Pages/PlanForm';
import FirstPage from './Pages/FirstPage';
import ChoosePlan from './Pages/ChoosePlan';
import ChoosePlan2 from './Pages/ChoosePlan2';
import ChoosePlan3 from './Pages/ChoosePlan3';

function App() {
  return (



<Routes>

  <Route  path='/' element={<FirstPage/>} />
 
 <Route path='/plan' element={<Plan/>} />

 <Route path='/planForm' element={<PlanForm/>} />
<Route path='/ChoosePlan' element={<ChoosePlan/>}/>
<Route path='/ChoosePlan2' element={<ChoosePlan2/>}/>
<Route path='/ChoosePlan3' element={<ChoosePlan3/>}/>
</Routes>


  );
}

export default App;

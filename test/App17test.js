
import { shallow } from 'enzyme';
import App18 from '../App18.jsx';
describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<App18/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'veena'}});
expect(wrapper.state('username')).toEqual('veena');
})
it('password check',()=>{
wrapper = shallow(<App18/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'veena123'}});
expect(wrapper.state('password')).toEqual('veena123');
})
it('login check with right data',()=>{
wrapper = shallow(<App18/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'veena'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'veena123'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(true);
})
it('login check with wrong data',()=>{
wrapper = shallow(<App18/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'veena'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'veena1234'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})
})
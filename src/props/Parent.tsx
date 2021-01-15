import { ChildAsFC as Child } from './Child';

const Parent = () => {
  return (
    <Child color='red' onClick={() => console.log('Clicked')}>
      Test
      <div>Div</div>
    </Child>
  );
};

export default Parent;

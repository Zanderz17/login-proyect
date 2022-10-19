import Sidebar from '../sidebar/Sidebar';
import Title from '../title/Title';

function TestSidebar() {
  return (
    <div className='d-flex'>
      <Sidebar />
      <Title></Title>
    </div>
  );
}

export default TestSidebar;

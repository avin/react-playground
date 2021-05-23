import React, { useState } from 'react';
import Tabs from './Tabs';

const tabs = [
  {
    value: 'tab1',
    label: 'Tab1',
  },
  {
    value: 'tab2',
    label: 'Tab2',
  },
  {
    value: 'tab3',
    label: 'Tab3',
  },
];

export default (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="content">
      <Tabs items={tabs} onChange={setActiveTab} value={activeTab} />
      <div style={{ paddingTop: 20 }}>selected tab: {activeTab}</div>
    </div>
  );
};

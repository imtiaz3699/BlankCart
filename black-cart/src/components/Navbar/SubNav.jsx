import React from 'react'
import AppLayout from '../../Layout/AppLayout'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MapPin, GitCompareArrows, Headphones, Info, PhoneCall } from 'lucide-react'
function SubNav() {
  const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true,
    },
  ];
  return (
    <div className='w-full flex items-center justify-center border-b-[1px] border-b-[#E4E7E9]'>
      <AppLayout>
        <div className='py-[24px] flex flex-row items-center justify-between flex-wrap gap-[24px] px-2 md:px-5'>
          <div className='flex flex-row items-center flex-wrap  gap-[24px]'>
            <Dropdown menu={{ items }} >
              <a onClick={e => e.preventDefault()}>
                <Space className='font-medium cursor-pointer'>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <div className='flex items-center gap-[6px]'>
              <MapPin color="#5F6C72" />
              <p className='text-[#5F6C72] text-[16px] font-medium '>Track Order</p>
            </div>
            <div className='flex items-center gap-[6px]'>
              <GitCompareArrows color="#5F6C72" />
              <p className='text-[#5F6C72] text-[16px] font-medium'>Compare</p>
            </div>
            <div className='flex items-center gap-[6px]'>
              <Headphones color="#5F6C72" />
              <p className='text-[#5F6C72] text-[16px] font-medium'>Customer Support</p>
            </div>
            <div className='flex items-center gap-[6px]'>
              <Info color="#5F6C72" />
              <p className='text-[#5F6C72] text-[16px] font-medium'>Customer Support</p>
            </div>
          </div>
          <div className='flex flex-row items-center gap-[6px]'>
            <PhoneCall color='#191C1F' />
            <p className='text-[#191C1F] text-[14px] font-medium' >+923392089085</p>
          </div>

        </div>
      </AppLayout>
    </div>
  )
}

export default SubNav

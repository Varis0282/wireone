import React, { useState } from 'react'
import { message } from 'antd';
import { PageWithNavbar } from '../../common/components'
import { saveNewConfig } from '../../common/apis/config';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/loaderReducer'

const Add = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const addConfig = async (e) => {
    e.preventDefault();

    for (let i = 0; i < 22; i++) {
      if (e.target[i].value === '') {
        message.error('Please fill all the fields');
        return;
      }
    }

    let data = {
      name: name,
      distanceBasePrice: {
        mon: {
          price: e.target[0].value,
          upto: e.target[1].value
        },
        tue: {
          price: e.target[2].value,
          upto: e.target[3].value
        },
        wed: {
          price: e.target[4].value,
          upto: e.target[5].value
        },
        thu: {
          price: e.target[6].value,
          upto: e.target[7].value
        },
        fri: {
          price: e.target[8].value,
          upto: e.target[9].value
        },
        sat: {
          price: e.target[10].value,
          upto: e.target[11].value
        },
        sun: {
          price: e.target[12].value,
          upto: e.target[13].value
        },
      },
      distanceAdditionalPrice: {
        price: e.target[14].value,
        after: e.target[15].value
      },
      timeMultipleFactor: {
        under1hour: e.target[16].value,
        under2hour: e.target[17].value,
        under3hour: e.target[18].value,
        after3hour: e.target[19].value
      },
      waitingCharge: {
        price: e.target[20].value,
        after: e.target[21].value
      }
    }

    dispatch(setLoading(true));
    let resp = await saveNewConfig(data);
    if (resp.success) {
      message.success('Config added successfully');
    } else {
      message.error('Failed to add config');
    }
    dispatch(setLoading(false));

  }

  return (
    <PageWithNavbar>
      <div className='flex flex-col items-center mt-32 h-screen w-full'>
        <h1 className='text-4xl font-bold text-center'>Add Config</h1>
        <h1 className='text-2xl font-semibold text-left mt-8'>Name</h1>
        <input type='text' placeholder='Name *' className='border-b-2 border-black w-70 p-2 my-4' onChange={(e) => setName(e.target.value)} />
        <form onSubmit={addConfig} className='flex flex-col gap-12 w-full'>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h1 className='text-2xl font-semibold text-left mt-8'>Distance Base Price</h1>
              <div className="flex flex-row gap-4 items-center">
                <span className='text-lg font-semibold'>Monday</span>
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className='text-lg font-semibold'>Tuesday</span>
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className='text-lg font-semibold'>Wednesday</span>
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className='text-lg font-semibold'>Thursday</span>
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className='text-lg font-semibold'>Friday</span>
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className='text-lg font-semibold'>Saturday</span>
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className='text-lg font-semibold'>Sunday</span>
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* ------------------------------------ */}
              <h1 className='text-2xl font-semibold text-left mt-8'>Distance Additional Price</h1>
              <div className="flex flex-row gap-4 items-center">
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Upto (in KMs) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>

              {/* ------------------------------------ */}
              <h1 className='text-2xl font-semibold text-left mt-9'>Time Charges</h1>
              <div className="flex flex-row gap-4 items-center">
                <input type='number' step={'0.01'} placeholder='Under 1 hr (in multiplier) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='Under 2 hr (in multiplier) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <input type='number' step={'0.01'} placeholder='Under 3 hr (in multiplier) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='After 3 hr (in multiplier) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>

              {/* ------------------------------------ */}
              <h1 className='text-2xl font-semibold text-left mt-9'>Wating Charges / 3 min</h1>
              <div className="flex flex-row gap-4 items-center">
                <input type='number' step={'0.01'} placeholder='Price (in Rs) *' className='border-b-2 border-black w-70 p-2 my-4' />
                <input type='number' step={'0.01'} placeholder='After (in minutes) *' className='border-b-2 border-black w-70 p-2 my-4' />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className='bg-blue-500 text-white p-2 w-48 rounded-md mb-24' type='submit'>Add Config</button>
          </div>
        </form>
      </div>
    </PageWithNavbar>
  )
}

export default Add
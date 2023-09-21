import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius:'20px',
  background:'#1F2937',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({handleClose,open}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white'>
        <div className="px-2 py-2 lg:px-2">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Enter Business Data</h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label for="business_data" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Whats your business data?</label>
                        <textarea type="text" name="business_data" id="business_data" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="business_product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What your business main product?</label>
                        <textarea type="text" name="business_product" id="business_product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    
                </form>
            </div>
        </Box>
      </Modal>
    </div>
  );
}

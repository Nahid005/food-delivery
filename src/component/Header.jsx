import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


import Logo from '../Images/delivery.png'
import Avatar from '../Images/avatar.png'
import {app} from '../firebase.config'
import { useStateValue } from './contextApi/StateProvider';
import {actionType} from './contextApi/Reducer'

const Header = () => {
    const [{user}, dispatch] = useStateValue()
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    
    const handleLogin = async () => {
        const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        })
    }

    return (
        <div className=' bg-slate-900 fixed w-screen h-auto py-3 '>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to={'/'}>
                    <div className='flex justify-start gap-2 items-center'>
                        <img className='w-16 h-16' src={Logo} alt="" />
                        <h5 className=' text-white font-semibold text-xl'> Food Delivery </h5>
                    </div>
                </Link>
                <div className='xl:block md:block  hidden'>
                    <ul className='flex gap-5 p-3'>
                        <li className='text-white text-md font-normal'> 
                            <Link to={'/'}> Home </Link>
                        </li>
                        <li className='text-white text-md font-normal'>  
                            <Link to={'./product'}> Product </Link>
                        </li>
                        <li className='text-white text-md font-normal'>  
                            <Link to={'/category'}> Category </Link>
                        </li>
                        <li className='text-white text-md font-normal'>  
                            <Link to={'/about'}> About </Link>
                        </li>
                        <li className='text-white text-md font-normal'>  
                            <Link to={'/contact'}> Contact </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='text-white relative'>
                        <span className='text-white absolute right-[5px] top-[-15px]'> 0 </span>
                        <ShoppingCartOutlinedIcon />
                    </div>
                    <div className='shadow drop-shadow cursor-pointer' onClick = {handleLogin}>
                        <motion.img whileTap={{scale: .8}} className='w-8 h-8 ' src={Avatar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
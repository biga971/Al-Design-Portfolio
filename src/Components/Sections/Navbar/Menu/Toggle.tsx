import React, { Dispatch, SetStateAction } from 'react'
import { FiMenu } from "react-icons/fi";
import { MenuToggle } from '../MenuToggle';

const Toggle = (props: {
    setShowMenu: Dispatch<SetStateAction<boolean>> 
    showMenu: boolean
}) => {
    const { setShowMenu, showMenu } = props;
    return (
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdxl:hidden bg-teal-600 w-10 h-10 inline-flex items-center justify-center rounded-full text-white cursor-pointer"
        >
          <FiMenu />
         {/*  <MenuToggle /> */}
        </span>
    )
}

export default Toggle
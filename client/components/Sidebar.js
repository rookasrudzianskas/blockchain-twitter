import React from 'react';
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { VscTwitter } from 'react-icons/vsc'
import {
    BsBookmark,
    BsBookmarkFill,
    BsPerson,
    BsPersonFill,
} from 'react-icons/bs'

const Sidebar = () => {

    const style = {
        wrapper: `flex-[0.7] px-8 flex flex-col`,
        twitterIconContainer: `text-3xl m-4`,
        tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
        navContainer: `flex-1`,
        profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
        profileLeft: `flex item-center justify-center mr-4`,
        profileImage: `height-12 w-12 rounded-full`,
        profileRight: `flex-1 flex`,
        details: `flex-1`,
        name: `text-lg`,
        handle: `text-[#8899a6]`,
        moreContainer: `flex items-center mr-2`,
    }

    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>

            <div className={style.navContainer}>
                <div>Home</div>
                <div>Explore</div>
                <div>Notifications</div>
                <div>Messages</div>
                <div>Bookmarks</div>
                <div>Lists</div>
                <div>Profile</div>
                <div>More</div>
            </div>

        </div>
    );
};

export default Sidebar;

import React from 'react'
import { FaAngellist } from 'react-icons/fa';
import { ImDribbble } from 'react-icons/im';
import  {BsTwitter,BsLinkedin,BsFacebook,BsGithub} from 'react-icons/bs';


function Footer() {
  return (
    <div className="bg-[#f6f0f1] ">
        <div className='newslater flex justify-between font-semibold m-6 items-center p-1'>
            <div>
                <p className="">Join our newsletter</p>
                <p className="text-xs text-[pink]">Our letters are sent once per week. We don't spam</p>
            </div>
            <div className="m-32">
                <input style={{borderBottom:"3px solid pink"}} className=" border-solid px-1 py-2"type="text" placeholder='Enter your email'/>
                <input  className=" ml-4 p-1 bg-[pink]" type='submit' value="Subscribe"/>
            </div>
        </div>
        {/* others */}
        <div className='flex items-start m-8 mt-12 text-sm text-[#ffadbb] '>
            <div className='w-1/3'>
                    <div>
                        <p className='font-bold text-black'>The joy of Learning</p>
                    </div>
            </div>
            <div className=" flex w-2/3 justify-center">

                <div className="w-1/5 "><span className='font-bold text-gray-400'>Products</span>
                    <div className=" "href="abc.com">Overview</div>
                    <div href="abc.com">Features</div>
                    <div href="abc.com">Solutions</div>
                    <div href="abc.com">Tutorials</div>
                    <div href="abc.com">Pricing</div>
                    <div href="abc.com">Releases</div>
                </div>
                <div className="w-1/5 "><span className='font-bold text-gray-400'>Company</span>
                    <div href="abc.com">Contact</div>
                    <div href="abc.com">About us</div>
                    <div href="abc.com">Careers</div>
                    <div href="abc.com">Press</div>
                    <div href="abc.com">News</div>
                    <div href="abc.com">Media List</div>
                </div>
                <div className="w-1/5 block "><span className='font-bold text-gray-400'>Releases</span>
                    <div href="abc.com">Overview</div>
                    <div href="abc.com">Features</div>
                    <div href="abc.com">Solutions</div>
                    <div href="abc.com">Tutorials</div>
                    <div href="abc.com">Pricing</div>
                    <div href="abc.com">Releases</div>
                </div>
                <div className="w-1/5"><span className='font-bold text-gray-400'>Social</span>
                <div href="abc.com">Twitter</div>
                    <div href="abc.com">Linkedin</div>
                    <div href="abc.com">Facebook</div>
                    <div href="abc.com">Github</div>
                    <div href="abc.com">Dribble</div>
                    <div href="abc.com">Wechat</div>
                </div>
                <div className="w-1/5 "><span className='font-bold text-gray-400'>Legal</span>
                <div href="abc.com">Terms</div>
                    <div href="abc.com">Cookies</div>
                    <div href="abc.com">Solutions</div>
                    <div href="abc.com">Licences</div>
                    <div href="abc.com">Settings</div>
                    <div href="abc.com">Contact</div>
                </div>
            
            </div>
        </div>
        {/* end notes and credits */}
        <div className="flex justify-around mr-10">
            <div  className="w-1/2 text-xs text-gray-500">
                <p >Desgn:1|16-2022-Dec.| used For edu purposes | All <a href="">respective</a> rights reserved</p>
            </div>
            <div className="flex w-1/2 items-start justify-center">
                <div className="mr-4 text-[pink]"><BsTwitter/></div>
                <div  className="mr-4 text-[pink]"><BsLinkedin/></div>
                <div  className="mr-4 text-[pink]"><BsFacebook/></div>
                <div  className="mr-4 text-[pink]"><BsGithub/></div>
                <div  className="mr-4 text-[pink]"><FaAngellist/></div>
                <a href="https://dribbble.com/shots/19771073-Footers-Untitled-UI?utm_source=Clipboard_Shot&utm_campaign=jordanhughes&utm_content=Footers%20%E2%80%94%20Untitled%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=jordanhughes&utm_content=Footers%20%E2%80%94%20Untitled%20UI&utm_medium=Social_Share" className="mr-4 text-[pink]"><ImDribbble/></a>

            </div>
        </div>
    </div>
  )
}

export default Footer
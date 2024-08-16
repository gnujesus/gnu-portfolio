import SocialIcon from './SocialIcon';

export default function Navbar() {
  return (
    <div className='bg-[#050505] text-white flex justify-between pt-20 pb-5 w-3/5'>
      <h1>GNU Jesus</h1>
      <ul className='flex gap-5 items-center'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
      </ul>

      <ul className='flex gap-5 items-center'>
        <li>
          <SocialIcon color='red'>children</SocialIcon>
        </li>
        <li>
          <SocialIcon color='red'>children</SocialIcon>
        </li>
        <li>
          <SocialIcon color='red'>children</SocialIcon>
        </li>
      </ul>
    </div>
  );
}

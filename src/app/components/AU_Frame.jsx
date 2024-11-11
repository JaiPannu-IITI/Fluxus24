import Image from 'next/image';
import frame from '../assets/frame.png';

const AU_Frame = () => {
    return (
        <>
            <div className="frame custom-gradient h-[100vh] w-[600px] overflow-hidden object-center object-cover">
                <Image src={frame} className='z-[-10] relative h-full' alt="Video Frame" layout="responsive" />
            </div>
        </>
    );
}

export default AU_Frame;

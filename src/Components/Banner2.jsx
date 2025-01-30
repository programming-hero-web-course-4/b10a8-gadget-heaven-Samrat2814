
const Banner2 = ({title, subtitle}) => {

    return (
        <div className='text-center bg-[#9538E2] py-10'>
            <h1 className='font-bold text-3xl text-white'>{title}</h1>
            <p className='font-semibold text-white'
            >{subtitle}</p>
        </div>
    );
};

export default Banner2;
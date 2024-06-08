// import { useState } from "react"
// import Loading from "../../../components/loading/Loading"
import OverviewCate from "../../../components/overview/OverviewCate"
import { BsCameraFill } from "react-icons/bs";

const CreateCategory = () => {
    
    // const [isLoading, setIsLoading] = useState(false)

    // const handleFiles = async (e) => {
    //     e.stopPropagation()
        
    // }
    return (
        <div className='px-6'>
            <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
            <div className='flex gap-4'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    {/* <OverviewCate payload={payload} setPayload={setPayload} /> */}
                    <OverviewCate />

                    <div className='w-full mb-6'>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho SEO nhanh hơn</small>
                        <div className='w-full '>
                            <label className='cursor-pointer w-full border-2 h-[200px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md' htmlFor="file">
                                {/* {isLoading */}
                                    {/* ? <Loading /> */}
                                    {/* :  */}
                                    <div className='flex flex-col items-center justify-center'>
                                        <BsCameraFill color='blue' size={50} />
                                        Thêm ảnh
                                    </div>
                                    {/* } */}
                            </label>

                        </div>
                    </div>

                    {/* <Button onClick={handleSubmit} text='Tạo mới' bgColor='bg-green-600' textColor='text-white' /> */}

                </div>
                <div className='w-[30%] flex-none'>
                    maps
                    {/* <Loading /> */}
                </div>
            </div>
        </div>
    )
}

export default CreateCategory
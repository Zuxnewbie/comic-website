import InputFormV2 from './InputFormV2'


const OverviewCategory = () => {

    // const { currentData } = useSelector(state => state.user)
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Thông tin thể loại truyện</h2>
            <div className='w-full flex flex-col gap-4'>
                <InputFormV2 value={'asdasd'} setValue={'asdsakdjaskdj'} name='Thể loại' label='Tiêu đề thể loại' />
                <InputFormV2 value={'asdasd'} setValue={'asdsakdjaskdj'} name='cate_id' label='Category ID' />

                <div className='flex flex-col gap-2'>
                    <label htmlFor="desc">Mô tả</label>
                    <textarea
                        id="desc"
                        cols="15" rows="5"
                        className='w-full rounded-md outline-none border border-gray-300 p-2'
                    ></textarea>
                </div>

            </div>


        </div>
    )
}

export default OverviewCategory
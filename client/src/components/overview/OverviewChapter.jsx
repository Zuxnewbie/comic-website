import InputFormV2 from './InputFormV2'


const OverviewChapter = () => {

    // const { currentData } = useSelector(state => state.user)
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Thông tin chapter</h2>
            <div className='w-full flex flex-col gap-4'>
                <InputFormV2 value={'asdasd'} setValue={'asdsakdjaskdj'} name='Tên chapter' label='Tên chapter' />
                <InputFormV2 value={'asdasd'} setValue={'asdsakdjaskdj'} name='cate_idid' label='Category ID' />
                <InputFormV2 value={'asdasd'} setValue={'asdsakdjaskdj'} name='story_idid' label='Story ID' />

                <div className='flex flex-col gap-2'>
                    <label htmlFor="desc">Nội dung chapter</label>
                    <textarea
                        id="desc"
                        cols="50" rows="20"
                        className='w-full rounded-md outline-none border border-gray-300 p-2'
                    ></textarea>
                </div>

            </div>


        </div>
    )
}

export default OverviewChapter
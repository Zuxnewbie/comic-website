import { useEffect } from 'react';
import  Select  from './Select'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../store/actions";
import InputFormV2 from './InputFormV2'


const Overview = ({payload, setPayload}) => {
    const dispatch = useDispatch();

    const { genres } = useSelector((state) => state.genre);
    // const [status, setStatus] = useState('');
    // console.log("selectêtd genre", selectedGenre);
    // console.log("genres adin", genres);

    const statusOptions = [
        {name: 'Đang ra' },
        {name: 'Full' },
    ];

    useEffect(() => {
        dispatch(actions.getGenreDetails());
      }, [dispatch]);
    // const { currentData } = useSelector(state => state.user)
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>
            <div className='w-full flex flex-col gap-4'>
                <InputFormV2 value={payload.name} setValue={setPayload} name='name' label='Tiêu đề truyện' />
                <InputFormV2 value={payload.author} setValue={setPayload} name='author' label='Tác Giả' />
                <div className='w-1/2'><Select value={payload.category_id} setValue={setPayload} name={'category_id'} options={genres} label='Thể loại truyện' type={'text'}/></div>
                <div className='w-1/2'><Select value={payload.status} setValue={setPayload} name={'status'} options={statusOptions} label='Status' type={'text'}/></div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="desc">Mô tả</label>
                    <textarea
                        id="desc"
                        cols="15" rows="5"
                        className='w-full rounded-md outline-none border border-gray-300 p-2'
                        value={payload.description} 
                        onChange={(e) => setPayload(prev => ({...prev, description: e.target.value}))}
                    ></textarea>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="desc">Nội dung truyện</label>
                    <textarea
                        id="content"
                        cols="30" rows="10"
                        className='w-full rounded-md outline-none border border-gray-300 p-2'
                        value={payload.content} 
                        onChange={(e) => setPayload(prev => ({...prev, content: e.target.value}))}
                    ></textarea>
                </div>

            </div>


        </div>
    )
}

export default Overview
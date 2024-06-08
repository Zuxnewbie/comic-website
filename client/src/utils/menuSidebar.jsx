import { ImPencil2 } from 'react-icons/im';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { BiUserPin } from 'react-icons/bi';

const memuSidebar = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/he-thong/tao-moi-bai-dang',
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/he-thong/quan-ly-bai-dang',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 4,
        text: 'Sửa thông tin cá nhân',
        path: '/he-thong/sua-thong-tin-ca-nhan',
        icon: <BiUserPin />
    },
    {
        id: 5,
        text: 'Liên hệ',
        path: '/he-thong/lien-he',
        icon: <BiUserPin />
    }
]

export default memuSidebar
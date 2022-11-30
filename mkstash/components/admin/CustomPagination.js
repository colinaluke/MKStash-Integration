import { Pagination } from "antd";

const CustomPagination = ({ total, currentPage, pageSize, onChange }) => {
    return ( 
        <Pagination 
            total={total}
            current={currentPage}
            pageSize={pageSize}
            onChange={onChange}
            showSizeChanger={false}
            className={"pagination px-4 py-4 justify-content-end"}
        />
     );
}
 
export default CustomPagination;
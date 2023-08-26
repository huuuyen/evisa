import {
    Box,
    Icon,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    tableCellClasses,
    Pagination,
    Stack,
    Switch
} from "@mui/material";
import LockResetIcon from '@mui/icons-material/LockReset';
import { EditIcon, DeleteIcon } from '@mui/icons-material';
const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
    border: "1px solid #CECECE"
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#CECECE',
        color: '#13345F',
        fontSize: '12px',
        fontWeight: "700",
        padding: "15px"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: "15px",
    },
}));
const StyledPagination = styled(Pagination)(({ theme }) => ({
    padding: "20px",
    justifyContent: 'center'
}));

const subscribarList = [
    {
        stt: 1,
        username: "Trunglq@gmai.com",
        fullname: "Lưu Quang Trung",
        phone: "0833618780",
        role: "Role quyền",
        status: true,
        date: "19/08/2022 01:46.",
    },
    {
        stt: 2,
        username: "Trunglq@gmai.com",
        fullname: "Lưu Quang Trung",
        phone: "0833618780",
        role: "Role quyền",
        status: true,
        date: "19/08/2022 01:46.",
    },
    {
        stt: 3,
        username: "Trunglq@gmai.com",
        fullname: "Lưu Quang Trung",
        phone: "0833618780",
        role: "Role quyền",
        status: true,
        date: "19/08/2022 01:46.",
    },
    {
        stt: 4,
        username: "Trunglq@gmai.com",
        fullname: "Lưu Quang Trung",
        phone: "0833618780",
        role: "Role quyền",
        status: false,
        date: "19/08/2022 01:46.",
    },
    {
        stt: 5,
        username: "Trunglq@gmai.com",
        fullname: "Lưu Quang Trung",
        phone: "0833618780",
        role: "Role quyền",
        status: false,
        date: "19/08/2022 01:46.",
    },
    {
        stt: 6,
        username: "Trunglq@gmai.com",
        fullname: "Lưu Quang Trung",
        phone: "0833618780",
        role: "Role quyền",
        status: true,
        date: "19/08/2022 01:46.",
    },
];

const SimpleTable = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" style={{ width: '50px' }}>stt</StyledTableCell>
                        <StyledTableCell align="left" style={{ width: '100px' }}>Action</StyledTableCell>
                        <StyledTableCell align="left">Tên tài khoản</StyledTableCell>
                        <StyledTableCell align="left">Họ và tên</StyledTableCell>
                        <StyledTableCell align="left">Số điện thoại</StyledTableCell>
                        <StyledTableCell align="left">Quyền</StyledTableCell>
                        <StyledTableCell align="left">Trạng thái</StyledTableCell>
                        <StyledTableCell align="left">Ngày tạo</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <StyledTableCell align="center" style={{ width: '50px' }}>{subscriber.stt}</StyledTableCell>
                            <StyledTableCell align="left">
                                <IconButton>
                                    <Icon color="edit">edit</Icon>
                                    <LockResetIcon />
                                </IconButton>
                            </StyledTableCell>
                            <StyledTableCell align="left">{subscriber.username}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.fullname}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.phone}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.role}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.status}
                                <Switch
                                    checked={subscriber.status}
                                    style={{ color: "#34A853" }}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">{subscriber.date}</StyledTableCell>
                            {/* <StyledTableCell align="left">
                                <IconButton>
                                    <Icon color="error">close</Icon>
                                </IconButton>
                            </StyledTableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>

            <Stack spacing={2} alignItems="center">
                <StyledPagination count={10}
                />
            </Stack>

        </Box>
    );
};

export default SimpleTable;

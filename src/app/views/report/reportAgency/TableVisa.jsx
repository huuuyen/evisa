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
    Stack
} from "@mui/material";

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
        registrationCode: "E230608USA10111150513",
        status: "L0",
        source: "Đại lý 1",
        nationality: "USA",
        phonenumber: "0833618780",
        type: "Evisa 2h",
        date: "19/08/2022 01:46.",
    },
    {
        stt: 2,
        registrationCode: "E230608USA10111150513",
        status: "L0",
        source: "Đại lý 1",
        nationality: "USA",
        phonenumber: "0833618780",
        type: "Evisa 2h",
        date: "19/08/2022 01:46.",
    },
    {
        stt: 3,
        registrationCode: "E230608USA10111150513",
        status: "L0",
        source: "Đại lý 1",
        nationality: "USA",
        phonenumber: "0833618780",
        type: "Evisa 2h",
        date: "19/08/2022 01:46.",
    },
    {
        stt: 4,
        registrationCode: "E230608USA10111150513",
        status: "L0",
        source: "Đại lý 1",
        nationality: "USA",
        phonenumber: "0833618780",
        type: "Evisa 2h",
        date: "19/08/2022 01:46.",
    },
    {
        stt: 5,
        registrationCode: "E230608USA10111150513",
        status: "L0",
        source: "Đại lý 1",
        nationality: "USA",
        phonenumber: "0833618780",
        type: "Evisa 2h",
        date: "19/08/2022 01:46.",
    },
    {
        stt: 6,
        registrationCode: "E230608USA10111150513",
        status: "L0",
        source: "Đại lý 1",
        nationality: "USA",
        phonenumber: "0833618780",
        type: "Evisa 2h",
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
                        <StyledTableCell align="left" style={{ width: '20%' }}>Registration Code</StyledTableCell>
                        <StyledTableCell align="left">Trạng thái</StyledTableCell>
                        <StyledTableCell align="left">Nguồn</StyledTableCell>
                        <StyledTableCell align="left">Nationality</StyledTableCell>
                        <StyledTableCell align="left">Phone Number</StyledTableCell>
                        <StyledTableCell align="left">Loại dịch vụ</StyledTableCell>
                        <StyledTableCell align="left">Ngày tạo</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <StyledTableCell align="center" style={{ width: '50px' }}>{subscriber.stt}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.registrationCode}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.status}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.source}</StyledTableCell>
                            <StyledTableCell align="left">{subscriber.nationality}</StyledTableCell>
                            <StyledTableCell align="left">${subscriber.phonenumber}</StyledTableCell>
                            <StyledTableCell align="left">${subscriber.type}</StyledTableCell>
                            <StyledTableCell align="left">${subscriber.date}</StyledTableCell>
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

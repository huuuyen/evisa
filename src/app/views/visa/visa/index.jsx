import { Stack } from '@mui/material';
import { Box, styled, Button } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import FormSearch from './FormSearch';
import PaginationTable from './tableVisa';
import { Span } from 'app/components/Typography';
// import StepperForm from './StepperForm';

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}));
const StyleSpan = styled(Span)(({ theme }) => ({
    color: "#810C11",
    fontSize: "19px",
    fontWeight: "700"
}));
const Visa = () => {
    return (
        <Container>
            <Stack spacing={3}>
                <StyleSpan># Quản lý visa / Thêm visa mới cần duyệt</StyleSpan>
                {/* <SimpleCard > */}
                <FormSearch />
                {/* </SimpleCard> */}
                {/* <SimpleCard > */}
                <PaginationTable />
                {/* </SimpleCard> */}


            </Stack>
        </Container>
    );
};

export default Visa;

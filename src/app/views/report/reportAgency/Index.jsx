import { Stack } from '@mui/material';
import { Box, styled, Button, Autocomplete, TextField } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import FormSearch from './FormSearch';
import PaginationTable from './TableVisa';
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
const AutoComplete = styled(Autocomplete)(() => ({
    width: "200px",
    marginBottom: '16px',
    float: "right",
}));

const listMonth = [
    { label: 'Tháng 1', value: '1' },
    { label: 'Tháng 2', value: '2' },
    { label: 'Tháng 3', value: '3' },
    { label: 'Tháng 4', value: '4' },
    { label: 'Tháng 5', value: '5' },
    { label: 'Tháng 6', value: '6' },
    { label: 'Tháng 7', value: '7' },
    { label: 'Tháng 8', value: '8' },
    { label: 'Tháng 9', value: '9' },
    { label: 'Tháng 10', value: '10' },
    { label: 'Tháng 11', value: '11' },
    { label: 'Tháng 12', value: '12' },

]
const Visa = () => {
    return (
        <Container>
            <Stack spacing={3}>
                <StyleSpan># thống kê báo cáo / thống kê visa, phí dịch vụ</StyleSpan>
                <Box>
                    <AutoComplete
                        name="nationality"
                        size='small'
                        options={listMonth}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                            <TextField {...params} label="Tháng này" fullWidth style={{ borderRadius: '10px', color: "#810C11", }} />
                        )}
                    />
                </Box>

                <PaginationTable />



            </Stack>
        </Container>
    );
};

export default Visa;

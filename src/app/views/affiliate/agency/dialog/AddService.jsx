import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Span } from "app/components/Typography";
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { styled, Autocomplete, TextField, Grid } from '@mui/material';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
const DialogRoot = styled('div')(({ theme }) => ({
    '& form': {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        width: 'fit-content'
    },
    '& .formControl': {
        marginTop: theme.spacing(2),
        minWidth: 120
    },
    '& .formControlLabel': {
        marginTop: theme.spacing(1)
    }
}));
const AutoComplete = styled(Autocomplete)(() => ({
    width: "100%",
    marginBottom: '16px',
}));
const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
];
const StyleDialogTitle = styled(DialogTitle)(({ theme }) => ({
    color: "#0A101D",
    fontSize: "15px",
    fontWeight: "700",
    border: "1px solid #34A853"
}));
const StyleTextField = styled(TextField)(() => ({
    width: "100%",
    // marginBottom: "16px",
}));
const gridItemStyle = {
    margin: "10px 0 0 0",
    paddingLeft: '30px', // Thêm padding bên trái
    paddingRight: '30px', // Thêm padding bên phải
};
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    width: "200px",
    borderRadius: "10px"
}));
const StyleLable = styled(Span)(() => ({
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: '18px',
    paddingBottom: '5px',
    color: "#000000",
    display: "block"
}));
const StyleGrid = styled(Grid)(() => ({
    margin: "20px 0",
    backgroundColor: "#F9FBFC",
    border: "1px solid #34A853",
    borderRadius: "10px",
    paddingBottom: "40px"
}));
export default function MaxWidthDialog({ openDialog, handleAddService, handleClose }) {
    // const [open, setOpen] = useState(false);
    const [state, setState] = useState({});
    const [fullWidth, setFullWidth] = useState(true);
    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        ServiceName,
    } = state;
    const ListSex = [
        { label: 'Nam', value: 'Nam' },
        { label: 'Nữ', value: 'Nữ' },
        { label: 'Khác', value: 'Khác' },
    ]
    const handleSubmit = (value) => {
        handleAddService(value)
    }
    function Close() {
        handleClose(!openDialog);
    }
    const handleDateChange = (date) => setState({ ...state, date });

    return (
        <DialogRoot>
            <Dialog
                open={openDialog}
                fullWidth={true}
                maxWidth="md"
                onClose={Close}
                PaperProps={{ style: { borderRadius: '10px' } }}
                aria-labelledby="max-width-dialog-title"
            >
                <StyleDialogTitle id="max-width-dialog-title">Tạo tài khoản người dùng hệ thống</StyleDialogTitle>

                <DialogContent >
                    <form noValidate>
                        <Grid container spacing={1}>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Tên tài khoản</StyleLable>
                                <StyleTextField
                                    type="text"
                                    name="username"
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Mật khẩu</StyleLable>
                                <StyleTextField
                                    type="password"
                                    name="password"
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Xác nhận mật khẩu</StyleLable>
                                <StyleTextField
                                    type="password"
                                    name="re_password"
                                />
                            </Grid>

                        </Grid>
                        <StyleGrid container spacing={1}>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Họ và tên</StyleLable>
                                <StyleTextField
                                    type="text"
                                    name="fullname"
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Ngày sinh</StyleLable>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={date}
                                        name="date"
                                        onChange={handleDateChange}
                                        renderInput={(props) => (
                                            <TextField
                                                {...props}
                                                id="mui-pickers-date"
                                                sx={{ mb: 2, width: "100%" }}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Số điện thoại</StyleLable>
                                <StyleTextField
                                    type="text"
                                    name="phone"
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Giới tính</StyleLable>
                                <AutoComplete
                                    name="sex"
                                    options={ListSex}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth />
                                    )}
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Email:</StyleLable>
                                <StyleTextField
                                    type="text"
                                    name="email"
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Chọn quyền</StyleLable>
                                <AutoComplete
                                    name="sex"
                                    options={ListSex}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth />
                                    )}
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleLable>Địa chỉ:</StyleLable>
                                <StyleTextField
                                    type="text"
                                    name="email"
                                />
                            </Grid>

                        </StyleGrid>

                    </form>
                </DialogContent>

                <DialogActions>
                    {/* <Button onClick={Close} color="primary">
                        Close
                    </Button> */}
                    <StyledButton variant="contained" type="submit" style={{ background: "#1EB15A" }}>
                        Tạo tài khoản
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </DialogRoot>
    );
}

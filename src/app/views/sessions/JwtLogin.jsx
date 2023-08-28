import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Container from '@mui/material/Container'
import { Span } from "app/components/Typography";
import Header from 'app/components/client/layout/header'
import Footer from 'app/components/client/layout/footer'
const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',

}));
const StyleSpanTitle = styled(Span)(() => ({
  fontSize: "19px",
  fontWeight: "700",
  margin: "30px 0"

}));
const StyleLoadingButton = styled(LoadingButton)(() => ({
  background: '#810C11',
  width: '100%',

}));
const JWTRoot = styled(JustifyBox)(() => ({
  '& .card': {
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center'
  }
}));


// inital login credentials
const initialValues = {
  email: 'jason@ui-lib.com',
  password: 'dummyPass',
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!')
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate('/admin/visa');
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <JWTRoot>
        <Container sx={{ py: { xs: 2, md: 3 } }}>
          <Box className="card">
            <Grid container>
              <Grid item sm={4} xs={12}>
                <ContentBox>
                  <StyleSpanTitle>Đăng nhập CMS Evisa Việt Nam</StyleSpanTitle>
                  <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                  >

                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>

                        <TextField
                          fullWidth
                          size="small"
                          type="email"
                          name="email"
                          label="Email đăng nhập"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.email}
                          onChange={handleChange}
                          helperText={touched.email && errors.email}
                          error={Boolean(errors.email && touched.email)}
                          sx={{ mb: 3 }}
                        />

                        <TextField
                          fullWidth
                          size="small"
                          name="password"
                          type="password"
                          label="Mật khẩu"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.password}
                          onChange={handleChange}
                          helperText={touched.password && errors.password}
                          error={Boolean(errors.password && touched.password)}
                          sx={{ mb: 1.5 }}
                        />
                        <StyleLoadingButton
                          type="submit"
                          color="primary"
                          loading={loading}
                          variant="contained"
                          sx={{ my: 2 }}
                        >
                          Đăng nhập
                        </StyleLoadingButton>
                      </form>
                    )}
                  </Formik>
                </ContentBox>
              </Grid>
              <Grid item sm={8} xs={12}>
                <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
                  <img src="/assets/images/illustrations/logo-login.svg" width="100%" alt="" />
                </JustifyBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </JWTRoot>
      <Footer />
    </>

  );
};

export default JwtLogin;

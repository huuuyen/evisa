import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import CourseCardItem from 'app/components/CoursesItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderArrow = (props) => {
    const { onClick, type } = props;
    const arrowPosition = type === 'prev' ? { left: 0 } : { right: 0 };

    return (
        <IconButton
            sx={{
                backgroundColor: 'background.paper',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                boxShadow: 1,
                ...arrowPosition,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
        >
            {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
        </IconButton>
    );
};

const StyledDots = styled('ul')(({ theme }) => ({
    '&.slick-dots': {
        position: 'absolute',
        left: 0,
        bottom: -20,
        paddingLeft: theme.spacing(1),
        textAlign: 'left',
        '& li': {
            marginRight: theme.spacing(2),
            '&.slick-active>div': {
                backgroundColor: "red",
            },
        },
    },
}))
const HomePopularCourse = (props) => {
    const { data, title } = props;
    const { breakpoints } = useTheme()
    const matchMobileView = useMediaQuery(breakpoints.down('md'))

    const sliderConfig = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: <SliderArrow type="prev" />,
        nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
        ),
    }

    return (
        <Box
            id="popular-course"
            sx={{
                backgroundColor: 'background.default',
                textAlign: "center"
            }}
        >
            <Container maxWidth="lg">
                <Typography sx={{ mb: 1, fontWeight: "700", fontSize: "30px" }}>
                    {title}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Slider {...sliderConfig}>
                            {data.map((item) => (
                                <CourseCardItem key={String(item.id)} item={item} />
                            ))}
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default HomePopularCourse

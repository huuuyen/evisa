import { useCallback, useEffect, useRef, useState } from 'react';
import { ButtonBase, Icon, Box, styled } from '@mui/material';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

const NavExpandRoot = styled('div')(({ theme }) => ({
  '& .expandIcon': {
    transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
    transform: 'rotate(90deg)'
  },
  '& .collapseIcon': {
    transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
    transform: 'rotate(0deg)'
  },
  '& .expansion-panel': {
    overflow: 'hidden',
    transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)'
  },
  '& .highlight': {
    background: theme.palette.primary.main
  },
  '&.compactNavItem': {
    width: 44,
    overflow: 'hidden',
    justifyContent: 'center !important',
    '& .itemText': { display: 'none' },
    '& .itemIcon': { display: 'none' }
  }
}));

const BaseButton = styled(ButtonBase)(({ theme }) => ({
  height: 23,
  width: '100%',
  whiteSpace: 'pre',
  overflow: 'hidden',
  paddingRight: '16px',
  borderRadius: '4px',
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'space-between !important',
  color: theme.palette.text.primary,
  '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
  '& .icon': {
    width: 36,
    fontSize: '18px',
    paddingLeft: '16px',
    paddingRight: '16px',
    verticalAlign: 'middle'
  }
}));

const ItemText = styled('span')(() => ({
  fontSize: '15px',
  paddingLeft: '0.8rem',
  color: '#810C11',
  verticalAlign: 'middle'
}));

const BadgeValue = styled('div')(() => ({
  padding: '1px 4px',
  overflow: 'hidden',
  borderRadius: '300px'
}));

const MatxVerticalNavExpansionPanel = ({ item, children, mode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const elementRef = useRef(null);
  const componentHeight = useRef(0);
  const { pathname } = useLocation();
  const { name, icon, iconText, badge } = item;

  const handleClick = () => {
    console.log("click")
    componentHeight.current = 0;
    calcaulateHeight(elementRef.current);
    setCollapsed(!collapsed);
  };

  const calcaulateHeight = useCallback((node) => {
    if (node.name !== 'child') {
      for (let child of node.children) {
        calcaulateHeight(child);
      }
    }

    if (node.name === 'child') componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44; //here 44 is node height
    return;
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    calcaulateHeight(elementRef.current);

    // OPEN DROPDOWN IF CHILD IS ACTIVE
    for (let child of elementRef.current.children) {
      if (child.getAttribute('href') === pathname) {
        setCollapsed(false);
      }
    }
  }, [pathname, calcaulateHeight]);

  return (
    <NavExpandRoot>
      <BaseButton
        className={clsx({
          'has-submenu compactNavItem': true,
          compactNavItem: mode === 'compact',
          open: true
        })}
        onClick={handleClick}
      >
        <Box display="flex" alignItems="center">
          <ItemText className="sidenavHoverShow">{name}</ItemText>
        </Box>
        {/* <div
          className={clsx({
            sidenavHoverShow: true,
            collapseIcon: collapsed,
            expandIcon: !collapsed
          })}
        >
          <Icon fontSize="small" sx={{ verticalAlign: 'middle' }}>
            chevron_right
          </Icon>
        </div> */}
      </BaseButton>

      <div
        ref={elementRef}
        className="expansion-panel submenu"
        style={collapsed ? { maxHeight: '0px' } : { maxHeight: componentHeight.current + 'px' }}
      >
        {children}
      </div>
    </NavExpandRoot>
  );
};

export default MatxVerticalNavExpansionPanel;

import React, { useCallback } from 'react';
import { AppIcon, AppButton, AppNavigation, AppView } from '../../common';
import { Header } from '..';
import { getThemeColor } from '../../common/utils/colors';
import { useSelector } from 'react-redux';
const CustomHeader = ({
  title,
  showMenu,
  hideCart
}) => {

  const userData = useSelector(state => state.auth.userData);

  const CartBTN = useCallback(async () => {

    AppNavigation.push({
      name: 'cart'
    })

  }, []);

  return (
    <Header
      color={getThemeColor('white')}
      backgroundColor={getThemeColor('metalic')}
      title={title}
      showMenu={showMenu}
      rightItems={() => (
        hideCart ? <AppView /> :
          <AppButton onPress={CartBTN} transparent>
            <AppIcon
              size={12}
              color="white"
              type="material-community"
              name="cart"
            />
          </AppButton>
      )}
    />
  );
};

export default CustomHeader;

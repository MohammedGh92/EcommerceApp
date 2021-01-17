import React from 'react';
import { ScrollableContainer } from '../../components/';
import Item from '../../components/menu/Item';
import { AppNavigation, AppView, AppImage } from '../../common';
import { AuthRepo } from '../../repo';
import { share } from '../../utils/Share';
const authRepo = new AuthRepo();
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../actions/types';

const Menu = () => {
  const dispatch = useDispatch();
  // const userData = useSelector(state => state.auth.userData);
  // ChangeLang = async () => {
  //   let lang = userData.Data.lang;
  //   if (lang === 'en')
  //     lang = 'ar';
  //   else
  //     lang = 'en';
  //   userData.Data.lang = lang;
  //   await authRepo.setPrincipalUser(userData);
  //   console.log('lang ===:'+lang);
  //   I18nManager.allowRTL(lang === 'ar');
  //   I18nManager.forceRTL(lang === 'ar');
  //   RNRestart.Restart();
  //   console.log('here');
  //   // AppNavigation.navigateToHome(userData.Data.lang === 'ar');
  // }

  const logout = async () => {
    dispatch({ type: LOGOUT });
    await new AuthRepo().logoutPrincipalUser();
    AppNavigation.navigateToAuth();
  };


  return (
    <ScrollableContainer header={false}>

      <AppView height={20} width={80} center marginBottom={10}>

        <AppImage center resizeMode="contain" marginTop={30} height={10} width={70}
          source={require('../../assets/imgs/ofertaLogo.png')}></AppImage>

      </AppView>

      <Item
        onPress={() => AppNavigation.navigateToHome()}
        title={'Home'} name="home" type="ant"
      />
      <Item
        onPress={() => AppNavigation.push({ name: 'category' })}
        title={'Category'} name="category" type="material"
      />
      <Item
        onPress={() => AppNavigation.push({ name: 'products' })}
        title={'Products'} name="category" type="material"
      />
      <Item
        onPress={() => AppNavigation.push({ name: 'productdetails' })}
        title={'Product Details'} name="shirt-outline" type="ion"
      />
      <Item
        onPress={() => AppNavigation.push({ name: 'cart' })}
        title={'Cart'} name="shoppingcart" type="ant"
      />
      <Item
        onPress={() => AppNavigation.push({ name: 'maplocation' })}
        title={'Map'} name="location" type="entypo"
      />
      <Item
        onPress={() => AppNavigation.push({ name: 'bill' })}
        title={'Bill'} name="file-invoice-dollar" type="font-awesome5"
      />

      <Item
        onPress={() => AppNavigation.push({ name: 'orders' })}
        title={'Orders'} name="cart" type="zocial"
      />

      <Item
        onPress={() => logout()}
        title={'Logout'} name="logout" type="ant"
      />

    </ScrollableContainer>
  );
};

export default Menu;

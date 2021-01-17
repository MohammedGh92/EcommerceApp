import React, { useEffect } from 'react';
import { AppView, AppScrollView, AppImage, AppText, AppNavigation } from '../../common';
import SplashScreen from 'react-native-splash-screen';
import { CustomHeader, CustomCatScrollView, CustomProdScrollView, CustomCat } from '../../components';
import { getThemeColor } from '../../common/utils/colors';
import SampleData from '../../data/SampleData.json';
import { useSelector } from 'react-redux';
import ProductsData from '../../data/ProductsData.json';
import BrandsData from '../../data/BrandsData.json';
import { I18nManager } from 'react-native';

const Home = () => {
  const userData = useSelector(state => state.auth.userData);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppView flex>
      <CustomHeader title='Matjar' showMenu />
      <AppScrollView stretch margin={2} centerX flexGrow>
        <AppImage height={32} width={93} center margin={5} elevation={2} source={require('../../assets/imgs/prombackground.png')}  >
          <AppImage resizeMode="stretch" height={30} elevation={2} width={88} margin={10} source={require('../../assets/imgs/prom1.png')} >
            <AppView marginVertical={65} center marginHorizontal={30} width={55} height={7} backgroundColor={getThemeColor('darkgrey')}>
              <AppText bold color='white' size={8} center>Big Discounts</AppText>
            </AppView>
          </AppImage>
        </AppImage>

        <CustomCatScrollView title='Main Categories' Data={SampleData} ShowOverlay NavMenu={'category'} />
        <CustomProdScrollView title='New Products' Data={ProductsData} NavMenu={'products'} />

        <CustomCat id={'1'} title={'MakeUp and beauty'} NavMenu={'category'} source={require('../../assets/imgs/ofertaassets/MainMenu/CommonSub1.png')} />
        <CustomCat id={'2'} title={'Kitchen and etc'} NavMenu={'category'} source={require('../../assets/imgs/ofertaassets/MainMenu/CommonSub2.png')} />
        <CustomCat id={'3'} title={'Sports'} NavMenu={'category'} source={require('../../assets/imgs/ofertaassets/MainMenu/CommonSub3.png')} />

        <CustomCatScrollView title='Shop by brand' Data={BrandsData} ShowOverlay NavMenu={'category'} />

      </AppScrollView>
    </AppView>
  );
};

export default Home;
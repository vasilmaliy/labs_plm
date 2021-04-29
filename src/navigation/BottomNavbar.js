import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Greeting from '../components/Greeting'
import DrawingViewController from '../components/DrawingViewController'
import ListViewController from '../components/ListViewController/ListViewController'

const BottomNavbar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'general', title: 'General', icon: 'home' },
      { key: 'drawing', title: 'Drawing',  icon: 'pencil' },
      { key: 'books', title: 'Books list',  icon: 'book' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
      general: Greeting,
      drawing: DrawingViewController,
      books: ListViewController
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  };

export default BottomNavbar